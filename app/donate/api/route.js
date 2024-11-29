// In your API handler for creating PaymentIntent:
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { paymentMethodId, amount, allowRedirects } = await req.json();

    const paymentIntentParams = {
      amount: Math.round(amount * 100),  // Convert to cents
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
    };

    if (allowRedirects) {
      // If redirects are allowed, provide return_url
      paymentIntentParams.return_url = "https://uadhc.vercel.app/thankyou";
    } else {
      // If redirects are not allowed, enable automatic payment methods and disable redirects
      paymentIntentParams.automatic_payment_methods = {
        enabled: true,
        allow_redirects: 'never',
      };
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);

    return NextResponse.json({ success: true, paymentIntent });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
