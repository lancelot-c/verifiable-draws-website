import fsPromises from 'fs/promises';
import path from 'path'
 
export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const cid = searchParams.get('cid')
    console.log(`cid = ${cid}`);

    const filepath = path.join(process.cwd(), `/src/app/ipfs/${cid}.html`);
    const fileData = await fsPromises.readFile(filepath, "utf-8");

    const dataHeaders = {
        status: 200,
        headers: {
            "Content-Type": "text/html; charset=utf-8"
        }
    };

    return new Response(fileData, dataHeaders);
}