"use client";  

import React, { useState } from "react";  
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";  
import { Pie } from "react-chartjs-2"; // no need for separate import for ArcElement, Tooltip, and Legend in v3  

// Import the necessary methods for Chart.js  
import { Chart, registerables } from "chart.js";  

// Register all components globally  
Chart.register(...registerables);  

const DonationForm = ({ onPaymentSuccess }) => {  
  const [target] = useState(10000); // Example target: \$10,000  
  const [donated, setDonated] = useState(3000); // Example donated: \$3,000  
  const stripe = useStripe();  
  const elements = useElements();  
  const [amount, setAmount] = useState("");  
  const donationAmounts = [10, 25, 50, 100, 250, 500];  

  const [error, setError] = useState("");  

  const handleSubmit = async (event) => {  
    event.preventDefault();  
    if (!stripe || !elements) {  
      return;  
    }  

    const cardElement = elements.getElement(CardElement);  
    const { error: paymentError, paymentMethod } =  
      await stripe.createPaymentMethod({  
        type: "card",  
        card: cardElement,  
      });  

    if (paymentError) {  
      setError(paymentError.message);  
    } else {  
      const response = await fetch("/api/donate", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),  
      });  

      const responseData = await response.json();  
      if (response.ok) {  
        onPaymentSuccess(responseData);  
      } else {  
        setError(responseData.error);  
      }  
    }  
    console.log("Processing donation of", amount);  
    setDonated((prev) => prev + parseFloat(amount));  
  };  

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

  return (  
    <div className=""> 
    <div className="max-w-2xl mx-auto my-12 align-middle">
        
   
      <form  
        onSubmit={handleSubmit}  
        className="space-y-4 w-72 bg-gray-100 p-4 rounded-lg shadow-inner"  
      >  
        <label className="block">  
          <span className="text-gray-700">Amount (USD):</span>  
          <input  
            type="number"  
            value={amount}  
            onChange={(e) => setAmount(e.target.value)}  
            placeholder="Enter amount"  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"  
            required  
          />  
        </label>  
        <label className="block">  
          <span className="text-gray-700">Payment Details:</span>  
          <CardElement className="p-2 border rounded-md bg-white" />  
        </label>  
        <button  
          type="submit"  
          disabled={!stripe}  
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300"  
        >  
          Donate ${amount || "0"}  
        </button>  
        {error && <p className="text-red-500">{error}</p>}  


      
      </form>  
      <div className="flex flex-col md:flex-row p-8 bg-white shadow-md">  
      <div className="flex-1 md:w-1/2">  
        <h2 className="text-2xl font-bold mb-4">Donate Today</h2>  
        <p className="text-gray-700 mb-4">  
          Your generosity empowers us to provide top-quality care to our participants. By donating to Uplifting Day Center, you’re investing in the well-being of our community. Every contribution, no matter the size, makes a significant impact.  
        </p>  
      </div>  
      <div className="flex-1 md:w-1/2 p-4 border-l">  
        <h3 className="text-xl font-semibold mb-4">How much would you like to donate today?</h3>  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label className="block text-gray-700">Donation Amount *</label>  
            <div className="flex flex-wrap mt-2">  
              {donationAmounts.map((amt) => (  
                <button  
                  key={amt}  
                  type="button"  
                  className={`m-1 px-4 py-2 rounded ${amount == amt ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-400`}  
                  onClick={() => setAmount(amt)}  
                >  
                  ${amt}.00  
                </button>  
              ))}  
              <input  
                type="number"  
                placeholder="Enter custom amount"  
                className="ml-2 px-4 py-2 border rounded w-full"  
                // value={amount}  
                // onChange={(e) => setAmount(e.target.value)}  
              />  
            </div>  
          </div>  

          <h3 className="mt-6 text-lg font-semibold">Who's Giving Today?</h3>  
          <div className="mb-4">  
            <input type="text" placeholder="First name" className="border rounded w-full p-2 mb-2" required />  
            <input type="text" placeholder="Last name" className="border rounded w-full p-2" required />  
          </div>  

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">  
            Donate Now  
          </button>  
        </form>  
      </div>  
    </div>  


    
      </div> 
      <div className="min-h-screen bg-gray-50 p-6">  
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">  
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">  
            Donate to Our Cause  
          </h1>  
          <div className="flex flex-col md:flex-row gap-8">  
            <div className="flex-1">  
              <h2 className="text-xl font-semibold text-gray-700 mb-4">  
                Donation Progress  
              </h2>  
              <div className="relative w-full h-64">  
                <Pie data={chartData} options={chartOptions} />  
              </div>  
              <p className="mt-4 text-gray-600">  
                Target: <strong>${target.toLocaleString()}</strong>  
              </p>  
              <p className="text-gray-600">  
                Donated: <strong>${donated.toLocaleString()}</strong>  
              </p>  
              <p className="text-gray-600">  
                Remaining:{" "}  
                <strong>${(target - donated).toLocaleString()}</strong>  
              </p>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default DonationForm;