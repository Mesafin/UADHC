"use client";

import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import Toastify styles

const ThankYouPage = () => {

  // Function to show the success notification
  const showSuccessNotification = () => {
    toast.success("Thank you for your generous donation!", {
    //   position: toast.POSITION.TOP_CENTER,
      autoClose: 5000, // Duration for the notification to be visible
      hideProgressBar: true,
      closeButton: true,
      theme: "light",
    });
  };

  // Call this when the page is loaded or the "Go to Homepage" button is clicked
  React.useEffect(() => {
    showSuccessNotification();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg max-w-lg p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600">Thank You!</h1>
          <p className="text-lg text-gray-600 mt-2">
            Your generous donation has been successfully processed.
          </p>
        </div>

        <div className="space-y-4">
          {/* <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Amount Donated</span>
            <span className="font-semibold text-gray-900 text-xl">${donationAmount}</span>
          </div> */}
          {/* <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Transaction ID</span>
            <span className="text-gray-500">{transactionId}</span>
          </div> */}
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Date</span>
            <span className="text-gray-500">Nov 30, 2024</span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition ease-in-out"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go to Homepage
          </button>
          <button
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition ease-in-out"
            onClick={() => {
              window.location.href = "/donate";
            }}
          >
            Donate Again
          </button>
        </div>
      </div>

      {/* Toastify Container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ThankYouPage;
