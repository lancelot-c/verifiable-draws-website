import Stripe from 'stripe'
import { kv } from "@vercel/kv";
import fs from 'fs';
const fsPromises = fs.promises;
import path from 'path'
import axios from 'axios'
import { Wallet, ethers } from 'ethers';
import crypto from 'crypto'
import { Web3Storage, getFilesFromPath } from 'web3.storage';
import { buildNextResponseJson } from './../../../../utils/errorHandling';
const filePath = path.join(process.cwd(), `src/assets/${process.env.CONTRACT_NAME}.json`);
const network = (process.env.NEXT_PUBLIC_APP_ENV === 'test') ? 'testnet' : 'mainnet';
let gasStationURL: string;
let providerBaseURL: string;
let providerKey: string;
let providerURL: string;
let contractAddress: string;
let polygonscanAddress: string;
let provider: ethers.JsonRpcProvider;
let wallet: Wallet;
setEthersParams(network)

function setEthersParams(network: string) {
    gasStationURL = ((network === 'mainnet') ? process.env.MAINNET_GAS_STATION_URL : process.env.TESTNET_GAS_STATION_URL) as string;
    providerBaseURL = ((network === 'mainnet') ? process.env.MAINNET_API_URL : process.env.TESTNET_API_URL) as string;
    providerKey = ((network === 'mainnet') ? process.env.MAINNET_API_KEY : process.env.TESTNET_API_KEY) as string;
    providerURL = `${providerBaseURL}${providerKey}`;
    contractAddress = ((network === 'mainnet') ? process.env.NEXT_PUBLIC_MAINNET_CONTRACT_ADDRESS : process.env.TESTNET_CONTRACT_ADDRESS) as string;
    polygonscanAddress = (network === 'mainnet') ? "https://polygonscan.com" : "https://mumbai.polygonscan.com";
    provider = new ethers.JsonRpcProvider(providerURL)

    if (!process.env.WALLET_PRIVATE_KEY) {
        throw new Error("process.env.WALLET_PRIVATE_KEY is not defined")
    }
    wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);
}

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

    return await buildNextResponseJson(async (response: any) => {

        const body = await request.json()
        const paymentIntentId: string = body.paymentIntentId
        const code: string = body.code
        
        // Me, Insight Media, Morning, Smartplay, Instagram ads
        const validCodes = ['siegfried', 'zatzikhoven', 'goodmorning', 'BR32'] // These codes get free draws
        const testCodes: string[] = [];
        let codeUsed = false;
        let testMode = false;
        const freeDraws = true;

        if (code || freeDraws) {

            if (validCodes.includes(code) || freeDraws) {
                codeUsed = true;
                console.log(`code ${code} used`);

                if (testCodes.includes(code)) {
                    testMode = true;
                    console.log(`test mode activated`);
                }

            } else {
                throw new Error(`Invalid code ${code} used`)
            }
            

        } else {

            // Cancel the request if something is wrong with the payment
            await verifyPayment(paymentIntentId);
            console.log(`Payment ${paymentIntentId} is valid. Draw deployment in progress...`);
        }
        

        // Deploy draw
        const drawTitle: string = body.drawTitle;
        const drawRules: string = body.drawRules;
        const drawParticipants: string = body.drawParticipants;
        const drawNbWinners: number = body.drawNbWinners;
        const drawScheduledAt: number = body.drawScheduledAt;

        await createDraw(response, drawTitle, drawRules, drawParticipants, drawNbWinners, drawScheduledAt, testMode);

        if (codeUsed) {

            const codeValue = await kv.get(`code_${code}`);
            let count: number = 0;

            if (Number.isInteger(codeValue)) {
                count = codeValue as number
            }
            count++;

            await kv.set(`code_${code}`, count);
            console.log(`Code ${code} has been used ${count} times.`)

        } else {
            // Set order as delivered
            try {
                await kv.set(paymentIntentId, 1);
                console.log(`Set ${paymentIntentId} : 1 in the KV store.`)
            } catch (error) {
                throw new Error(`Can't set ${paymentIntentId} value in the KV store`)
            }
        }

    })
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
    response: any,
    drawTitle: string,
    drawRules: string,
    drawParticipants: string,
    drawNbWinners: number,
    drawScheduledAt: number,
    testMode: boolean
): Promise<string | undefined> {

    if (!drawTitle || !drawRules || !drawParticipants || !drawNbWinners || !drawScheduledAt) {
        throw new Error('You need to specify all draw parameters.');
    }

    if (testMode) {
        setEthersParams('testnet')
    }

    // Compute entropy needed
    const drawParticipantsArray = drawParticipants.split('\n').filter(n => n);
    const drawNbParticipants = drawParticipantsArray.length;
    const entropyNeeded = await computeEntropyNeeded(drawNbParticipants, drawNbWinners);

    // Generate draw file
    const [drawFilepath, content] = await generateDrawFile(drawTitle, drawRules, drawParticipantsArray, drawNbParticipants, drawNbWinners, drawScheduledAt);

    // Pin draw file on IPFS
    const cid = await pinInWeb3Storage(response, drawFilepath, drawTitle);
    await pinInKV(cid, content);

    // Rename draw file to match IPFS CID
    // await renameFileToCid(drawFilepath, cid);

    // Delete temp file
    deleteTmpDrawFile(drawFilepath);

    // Publish draw on smart contract
    await publishOnSmartContract(cid, drawScheduledAt, drawNbParticipants, drawNbWinners, entropyNeeded);

    return cid

}

// async function renameFileToCid(oldPath: string, cid: string) {
//     const newPath = path.join(process.cwd(), `/src/app/ipfs/${cid}.html`);
//     console.log(`Rename ${oldPath} to ${newPath}`);
//     return fsPromises.rename(oldPath, newPath);
// }

function deleteTmpDrawFile(drawFilepath: string) {
    fs.unlink(drawFilepath, (err) => {
        if (err) {
            throw err;
        }

        console.log(`Deleted ${drawFilepath} successfully.`);
    });
}

async function computeEntropyNeeded(nbParticipants: number, nbWinners: number): Promise<number> {

    let entropyNeeded = 0;

    // Optimised using Information Theory
    for (let i = 0; i < nbWinners; i++) {
        entropyNeeded += Math.ceil(Math.log2(nbParticipants - i) / 8); // in bytes
    }

    console.log(`${entropyNeeded} bytes of entropy needed\n`);
    return entropyNeeded;
}

async function generateDrawFile(drawTitle: string, drawRules: string, drawParticipantsArray: string[], drawNbParticipants: number, drawNbWinners: number, unix_timestamp: number) {
    const templateFilepath = path.join(process.cwd(), '/src/template/template_en.html');
    console.log(`templateFilepath = ${templateFilepath}`);

    const content = await fsPromises.readFile(templateFilepath, 'utf8');

    const network = providerBaseURL.slice(8).split('.')[0];
    const drawParticipantsList = `'${drawParticipantsArray.join('\',\'')}'`;

    // Replace placeholders with draw parameters
    const newContent = content
        .replaceAll('{{ network }}', network)
        .replaceAll('{{ contractAddress }}', contractAddress)
        .replaceAll('{{ polygonscanAddress }}', polygonscanAddress)
        .replaceAll('{{ drawTitle }}', drawTitle)
        .replaceAll('{{ drawScheduledAt }}', unix_timestamp.toString())
        .replaceAll('{{ drawRules }}', drawRules.replaceAll('\n', '<br />'))
        .replaceAll('{{ drawNbParticipants }}', drawNbParticipants.toString())
        .replaceAll('{{ drawParticipants }}', drawParticipantsList)
        .replaceAll('{{ drawNbWinners }}', drawNbWinners.toString());

    const fileHash = sha256(newContent);
    const drawTempFilepath = `/tmp/${fileHash}.html`;
    console.log(`drawTempFilepath = ${drawTempFilepath}`);

    await fsPromises.writeFile(drawTempFilepath, newContent, 'utf8');

    return [drawTempFilepath, newContent];

}

async function pinInWeb3Storage(response: any, filepath: string, drawTitle: string): Promise<string> {
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
        response.cid = rootCid
        resolve(rootCid);
    };

    storage.put(files, {
        name: drawTitle,
        wrapWithDirectory: false,
        onRootCidReady
    });

    return cidPromise;
}

async function pinInKV(cid: string, content: string) {
    await kv.set(`content_${cid}`, content);
}

async function publishOnSmartContract(v1CidString: string, scheduledAt: number, nbParticipants: number, nbWinners: number, entropyNeeded: number) {
    console.log(`Publish draw ${v1CidString} on smart contract ${contractAddress}, scheduled at ${scheduledAt}, needing ${entropyNeeded} entropy\n`);

    const jsonData = await fsPromises.readFile(filePath);
    const abi = JSON.parse(jsonData.toString()).abi;

    const contract = new ethers.Contract(
        contractAddress,
        abi,
        wallet
    );

    await setOptimalGas();

    try {
        await contract.launchDraw(v1CidString, scheduledAt, nbParticipants, nbWinners, entropyNeeded, {
            maxFeePerGas,
            maxPriorityFeePerGas,
        });
    } catch (err: any) {
        console.error(err);
        throw new Error(`Failed to deploy the draw on the smart contract.`);
    }

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
        });
        maxFeePerGas = ethers.parseUnits(
            Math.ceil(data.fast.maxFee) + '',
            'gwei'
        )
        maxPriorityFeePerGas = ethers.parseUnits(
            Math.ceil(data.fast.maxPriorityFee) + '',
            'gwei'
        )
    } catch {
        console.error(`Failed to call the gas station at ${gasStationURL}`);
    }
}