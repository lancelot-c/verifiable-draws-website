import { NextResponse } from 'next/server'
import fsPromises from 'fs/promises';
import path from 'path'
import { ethers } from 'ethers';
import { kv } from "@vercel/kv";


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const network = searchParams.get('network')
    const contractAddress = searchParams.get('contractAddress')
    const cid = searchParams.get('cid')

    if (!network || !contractAddress || !cid) {
        throw new Error("'network', 'contractAddress', and 'cid' parameters are required.")
    }

    if (network !== "polygon-mainnet" && network !== "polygon-mumbai") {
        throw new Error(`Network ${network} is not supported.`)
    }

    const expectedContractAddress = ((network === 'polygon-mainnet') ? process.env.MAINNET_CONTRACT_ADDRESS : process.env.TESTNET_CONTRACT_ADDRESS) as string;
    if (contractAddress !== expectedContractAddress) {
        throw new Error(`Wrong contract address. Expected ${expectedContractAddress}, got ${contractAddress}.`)
    }

    if (!process.env.WALLET_PRIVATE_KEY) {
        throw new Error("process.env.WALLET_PRIVATE_KEY not found.")
    }

    console.log(`api/smart-contract/getWinners called with network = ${network}, contractAddress = ${contractAddress}, and cid = ${cid}`);

    let winners: number[];
    const emptyWinners: number[] = [];
    const cachedWinners: number[] | null = await kv.get(`winners_${cid}`);

    if (cachedWinners && Array.isArray(cachedWinners) && cachedWinners != emptyWinners) {

        // Retrieve randomness in cache if present
        winners = cachedWinners;
        console.log(`Retrieved cached winners ${cid} : ${cachedWinners} from the KV store.`)

    } else {

        // Else retrieve from smart contract
        console.log(`No cache in KV store. Retrieving winners from the smart contract.`)
        const providerBaseURL = (network === 'polygon-mainnet') ? process.env.MAINNET_API_URL : process.env.TESTNET_API_URL;
        const providerKey = (network === 'polygon-mainnet') ? process.env.MAINNET_API_KEY : process.env.TESTNET_API_KEY;
        const providerURL = `${providerBaseURL}${providerKey}`;

        const jsonRpcProvider = new ethers.JsonRpcProvider(providerURL)
        const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, jsonRpcProvider);
        console.log('#0');
        const contractArtifactFilePath = path.join(process.cwd(), `src/assets/${process.env.CONTRACT_NAME}.json`);
        const contractArtifact = await fsPromises.readFile(contractArtifactFilePath);
        const contractAbi = JSON.parse(contractArtifact.toString()).abi;
        console.log('#1');

        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            wallet
        );
        console.log('#2');
        const scResponse: string = await contract.getWinners(cid);
        console.log(`winners from SC = ${scResponse}`);
        winners = scResponse.split(',').map(winner => Number(winner));
        console.log(`winners after fromatting = ${winners}`);
        console.log('#3');
        // If winners have been generated, cache it
        if (winners && Array.isArray(winners) && winners != emptyWinners) {
            await kv.set(`winners_${cid}`, winners);
            console.log(`Added ${cid} : ${winners} in the KV store.`)
        }
        
    }
    console.log(`winners = ${winners}`);
    console.log('#4');
    const response = { winners }
    console.log('#5');
    return NextResponse.json(response, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow all IPFS gateways to query this endpoint
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}