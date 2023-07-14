import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { kv } from "@vercel/kv";
import fs from 'fs';
const fsPromises = fs.promises;
import path from 'path'
import axios from 'axios'
import { ethers } from 'ethers';
import crypto from 'crypto'
import { Web3Storage, getFilesFromPath } from 'web3.storage';
const network = (process.env.NEXT_PUBLIC_APP_ENV === 'test') ? 'testnet' : 'mainnet';
const gasStationURL = (network === 'mainnet') ? process.env.MAINNET_GAS_STATION_URL : process.env.TESTNET_GAS_STATION_URL;
const providerBaseURL = ((network === 'mainnet') ? process.env.MAINNET_API_URL : process.env.TESTNET_API_URL) as string;
const providerKey = ((network === 'mainnet') ? process.env.MAINNET_API_KEY : process.env.TESTNET_API_KEY) as string;
const providerURL = `${providerBaseURL}${providerKey}`;
const contractAddress = ((network === 'mainnet') ? process.env.MAINNET_CONTRACT_ADDRESS : process.env.TESTNET_CONTRACT_ADDRESS) as string;
const polygonscanAddress = (network === 'mainnet') ? "https://polygonscan.com" : "https://mumbai.polygonscan.com"; 
const filePath = path.join(process.cwd(), `src/assets/${process.env.CONTRACT_NAME}.json`);

if (!process.env.WALLET_PRIVATE_KEY) {
    throw new Error("process.env.WALLET_PRIVATE_KEY is not defined")
}

const provider = new ethers.JsonRpcProvider(providerURL)
const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);

let maxFeePerGas = BigInt("40000000000") // fallback to 40 gwei
let maxPriorityFeePerGas = BigInt("40000000000") // fallback to 40 gwei


const stripeSecretKey = (process.env.NEXT_PUBLIC_STRIPE_ENV === 'test') ? process.env.STRIPE_SECRET_KEY_TEST : process.env.STRIPE_SECRET_KEY_PROD;

if (!stripeSecretKey) {
    throw new Error("stripeSecretKey is undefined")
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2022-11-15",
    typescript: true,
});


export async function POST(request: Request) {

    const body = await request.json()
    const paymentIntentId: string = body.paymentIntentId

    // Cancel the request if something is wrong with the payment
    await verifyPayment(paymentIntentId);
    console.log(`Payment ${paymentIntentId} is valid. Draw deployment in progress...`);

    // Deploy draw
    const drawTitle: string = body.drawTitle;
    const drawRules: string = body.drawRules;
    const drawParticipants: string = body.drawParticipants;
    const drawNbWinners: number = body.drawNbWinners;
    const drawScheduledAt: number = body.drawScheduledAt;

    const cid = await createDraw(drawTitle, drawRules, drawParticipants, drawNbWinners, drawScheduledAt);

    if (cid) {
        // Set order as delivered
        try {
            await kv.set(paymentIntentId, 1);
            console.log(`Set ${paymentIntentId} : 1 in the KV store.`)
        } catch (error) {
            throw new Error(`Can't set ${paymentIntentId} value in the KV store`)
        }
    } else {
        throw new Error(`Could not deploy draw`)
    }

    const data = {
        cid
    }

    return NextResponse.json(data)
}

async function verifyPayment(paymentIntentId: string): Promise<0> {
    return new Promise(async (resolve) => {

        // 0 = not delivered yet, 1 = delivered
        const orderStatus = await kv.get(paymentIntentId);
        if (orderStatus === 0) {
            return resolve(orderStatus);
        }

        const retryResult = await kvRetryGet(paymentIntentId);
        return resolve(retryResult);
    });
}

async function kvRetryGet(paymentIntentId: string, delay = 3000, retries = 3): Promise<0> {
    return new Promise(async (resolve) => {

        console.log(`KV retry get() for ${paymentIntentId} - delay:${delay} - retries:${retries}`);

        if (retries === 0) {
            throw new Error(`wrong use of kvRetryGet, retries should be > 0`)
        }

        setTimeout(async () => {
            const orderStatus = await kv.get(paymentIntentId);

            if (orderStatus === undefined || orderStatus === null) {
                if (--retries > 0) {
                    await kvRetryGet(paymentIntentId, delay * 2, retries);
                } else {
                    throw new Error(`No value in KV store for ${paymentIntentId} after ${retries + 1} get() attempts`)
                }
            } else if (orderStatus === 1) {
                throw new Error(`Order ${paymentIntentId} was already delivered`)
            } else if (orderStatus !== 0) {
                throw new Error(`Unknown status for order ${paymentIntentId} : ${orderStatus}`)
            }

            return resolve(0);

        }, delay);

    });
}

async function createDraw(
    drawTitle: string,
    drawRules: string,
    drawParticipants: string,
    drawNbWinners: number,
    drawScheduledAt: number
): Promise<string | undefined> {
    try {

        console.log(`drawTitle = \n"${drawTitle}"\n\n`);
        console.log(`drawRules = \n"${drawRules}"\n\n`);
        console.log(`drawParticipants = \n"${drawParticipants}"\n\n`);
        console.log(`drawNbWinners = \n"${drawNbWinners}"\n\n`);
        console.log(`drawScheduledAt = \n"${drawScheduledAt}"\n\n`);

        if (!drawTitle || !drawRules || !drawParticipants || !drawNbWinners || !drawScheduledAt) {
            throw Error('You need to specify all draw parameters.');
        }

        // Compute entropy needed
        const drawNbParticipants = drawParticipants.length;
        const entropyNeeded = await computeEntropyNeeded(drawNbParticipants, drawNbWinners);

        // Generate draw file
        const drawFilepath = await generateDrawFile(drawTitle, drawRules, drawParticipants, drawNbWinners, drawScheduledAt);

        // Pin draw file on IPFS
        const cid = await pinOnIPFS(drawFilepath, drawTitle);

        // Rename draw file to match IPFS CID
        await renameFileToCid(drawFilepath, cid);

        // Publish draw on smart contract
        await publishOnSmartContract(cid, drawScheduledAt, entropyNeeded);

        return cid

    } catch (err) {
        console.error(err);
    }
}

async function renameFileToCid(oldPath: string, cid: string) {
    const newPath = path.join(process.cwd(), `/src/app/ipfs/${cid}.html`);
    console.log(`Rename ${oldPath} to ${newPath}`);
    return fsPromises.rename(oldPath, newPath);
}

async function computeEntropyNeeded(nbParticipants: number, nbWinners: number): Promise<number> {

    let entropyNeeded = 0;

    // Simple method
    entropyNeeded = nbWinners * Math.ceil(Math.log2(nbParticipants) / 8); // in bytes

    // Optimised using Information Theory
    // for (let i = 0; i < nbWinners; i++) {
    //     entropyNeeded += Math.ceil(Math.log2(nbParticipants - i) / 8); // in bytes
    // }

    console.log(`${entropyNeeded} bytes of entropy needed\n`);
    return entropyNeeded;
}

async function generateDrawFile(drawTitle: string, drawRules: string, drawParticipants: string, drawNbWinners: number, unix_timestamp: number) {
    const templateFilepath = path.join(process.cwd(), '/src/template/template_en.html');
    console.log(`templateFilepath = ${templateFilepath}`);

    const content = await fsPromises.readFile(templateFilepath, 'utf8');

    const network = providerBaseURL.slice(8).split('.')[0];
    const drawParticipantsArray = drawParticipants.split('\n');
    const drawParticipantsList = `'${drawParticipantsArray.join('\',\'')}'`;

    // Replace placeholders with draw parameters
    const newContent = content
        .replaceAll('{{ network }}', network)
        .replaceAll('{{ contractAddress }}', contractAddress)
        .replaceAll('{{ polygonscanAddress }}', polygonscanAddress)
        .replaceAll('{{ drawTitle }}', drawTitle)
        .replaceAll('{{ drawScheduledAt }}', unix_timestamp.toString())
        .replaceAll('{{ drawRules }}', drawRules.replaceAll('\n', '<br />'))
        .replaceAll('{{ drawNbParticipants }}', drawParticipantsArray.length.toString())
        .replaceAll('{{ drawParticipants }}', drawParticipantsList)
        .replaceAll('{{ drawNbWinners }}', drawNbWinners.toString());

    const fileHash = sha256(newContent);
    const drawTempFilepath = path.join(process.cwd(), `/src/app/ipfs/${fileHash}.html`);
    console.log(`drawTempFilepath = ${drawTempFilepath}`);

    await fsPromises.writeFile(drawTempFilepath, newContent, 'utf8');
    return drawTempFilepath;

}

async function pinOnIPFS(filepath: string, drawTitle: string): Promise<string> {
    console.log(`Uploading ${filepath} to IPFS...\n`);

    const token = process.env.WEB3_STORAGE_API_TOKEN

    if (!token) {
        throw new Error("A token is needed. You can create one on https://web3.storage")
    }

    const storage = new Web3Storage({ token })
    const files = []

    const pathFiles = await getFilesFromPath(filepath)
    files.push(...pathFiles)

    let resolve: Function;
    const cidPromise: Promise<string> = new Promise((r) => {
        resolve = r;
    });

    const onRootCidReady = (rootCid: string) => {
        console.log(`Root CID is ${rootCid}\n`)
        resolve(rootCid);
    };

    storage.put(files, {
        name: drawTitle,
        wrapWithDirectory: false,
        onRootCidReady
    });
    return cidPromise;
}

async function publishOnSmartContract(v1CidString: string, scheduledAt: number, entropyNeeded: number) {
    console.log(`Publish draw ${v1CidString} on smart contract ${contractAddress}\n`);

    const jsonData = await fsPromises.readFile(filePath);
    const abi = JSON.parse(jsonData.toString()).abi;

    const contract = new ethers.Contract(
        contractAddress,
        abi,
        wallet
    );

    await setOptimalGas();
    await contract.launchDraw(v1CidString, scheduledAt, entropyNeeded, {
        maxFeePerGas,
        maxPriorityFeePerGas,
    });
}

function sha256(message: string) {
    return Buffer.from(crypto.createHash('sha256').update(message).digest('hex')).toString('base64');
}

// Call this function every time before a contract call
async function setOptimalGas() {
    try {
        const { data } = await axios({
            method: 'get',
            url: gasStationURL
        })
        maxFeePerGas = ethers.parseUnits(
            Math.ceil(data.fast.maxFee) + '',
            'gwei'
        )
        maxPriorityFeePerGas = ethers.parseUnits(
            Math.ceil(data.fast.maxPriorityFee) + '',
            'gwei'
        )
    } catch {
        // ignore
    }
}