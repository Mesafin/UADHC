"use client";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

const DonationForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");
  const [donated, setDonated] = useState(3000); // Example initial donated amount
  const target = 10000; // Target donation amount
  const [error, setError] = useState("");
  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const chartData = {
    labels: ["Donated", "Remaining"],
    datasets: [
      {
        data: [donated, target - donated],
        backgroundColor: ["#4CAF50", "#FF5252"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      const { error: paymentError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (paymentError) {
        setError(paymentError.message);
        return;
      }

      const response = await fetch("/donate/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
      });

      const data = await response.json();

      if (response.ok) {
        setDonated((prev) => prev + parseFloat(amount));
        onPaymentSuccess(data);
      } else {
        setError(data.error || "Payment failed.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 p-6 rounded shadow"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Amount (USD):</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-2 block w-full rounded border-gray-300 p-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Payment Details:</span>
          <CardElement className="p-2 border rounded bg-white" />
        </label>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Donate ${amount || "0"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      <div className="w-full max-w-xl mt-8">
        <h2 className="text-center text-xl font-bold mb-4">Donation Progress</h2>
        <div className="relative w-full h-64">
          <Pie data={chartData} options={chartOptions} />
        </div>
        <div className="text-center mt-4">
          <p>
            Target: <strong>${target.toLocaleString()}</strong>
          </p>
          <p>
            Donated: <strong>${donated.toLocaleString()}</strong>
          </p>
          <p>
            Remaining:{" "}
            <strong>${(target - donated).toLocaleString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
