import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { kv } from "@vercel/kv";
const { NEXT_PUBLIC_STRIPE_ENV, STRIPE_SECRET_KEY_PROD, STRIPE_SECRET_KEY_TEST } = process.env;
const stripeSecretKey = (NEXT_PUBLIC_STRIPE_ENV === 'test') ? STRIPE_SECRET_KEY_TEST : STRIPE_SECRET_KEY_PROD;

if (!stripeSecretKey) {
    throw new Error("stripeSecretKey is undefined")
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2022-11-15",
    typescript: true,
});

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_e58fae767ab64a44f8181158a4f12a6485bd09cc5c0954e5752e479c32bf8027";

export async function POST(request: Request) {

    const sig = request.headers.get('stripe-signature');

    let event;

    try {
        const body = await request.text()
        
        if (sig) {
            event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
        }
        
    } catch (err: any) {
        // response.status(400).send(`Webhook Error: ${err.message}`);
        const data = {
            message: `Webhook Error: ${err.message}`,
        }
    
        return NextResponse.json(data)
    }

    // Handle the event
    switch (event?.type) {
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data.object as any;
            // Then define and call a function to handle the event payment_intent.succeeded
            // console.log('payment_intent.succeeded received')
            // console.log(paymentIntentSucceeded)

            try {
                await kv.set(paymentIntentSucceeded.id, 0);
              } catch (error) {
                throw new Error(`Can't add ${paymentIntentSucceeded.id} to the KV store`)
            }

            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event?.type}`);
    }

    const data = {
        message: 'ok',
    }

    return NextResponse.json(data)
}