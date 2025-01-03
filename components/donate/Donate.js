"use client";

import React from "react";
import StripeProvider from "./donate/StripeProvider";
import DonationForm from "./donate/DonationForm";

const Donate = () => {
  const handlePaymentSuccess = (data) => {
    console.log("Donation successful:", data);
    alert("Thank you for your donation!");
  };

  return (
    <StripeProvider>
      <div className="container mx-auto py-8">
        <DonationForm onPaymentSuccess={handlePaymentSuccess} />
      </div>
    </StripeProvider>
  );
};

export default Donate;
