"use client";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripeProvider = ({ children }) => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    console.error("Stripe publishable key is missing!");
  }

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
