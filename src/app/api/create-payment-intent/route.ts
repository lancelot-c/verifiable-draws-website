import { NextResponse } from 'next/server'
import env from 'dotenv'
env.config({ path: '/.env.local' });
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is not set")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  typescript: true,
});
 

const calculateOrderAmount = (nbDraws: number) => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 2900 * nbDraws;
};

export async function POST() {

    //   Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(1),
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
    });
 
    const data = {
        clientSecret: paymentIntent.client_secret,
    }
 
  return NextResponse.json(data)
}