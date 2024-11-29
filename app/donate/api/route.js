import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { paymentMethodId, amount } = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
    });

    return NextResponse.json({ success: true, paymentIntent });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
