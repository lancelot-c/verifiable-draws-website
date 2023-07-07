import { NextResponse } from 'next/server'
import { Web3Storage } from 'web3.storage';


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const rootCid = searchParams.get('rootCid')
    if (!rootCid) {
        throw new Error("A rootCid parameter is needed.")
    }
    console.log(`api/draw/status called with rootCid = ${rootCid}`);

    const token = process.env.WEB3_STORAGE_API_TOKEN
    if (!token) {
        throw new Error("A token is needed. You can create one on https://web3.storage")
    }
  
    const client = new Web3Storage({ token })
    const info = await client.status(rootCid);
    
    return NextResponse.json(info)
}