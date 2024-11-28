// "use client";

// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { Pie } from "react-chartjs-2";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const Donate = () => {
//   const [target, setTarget] = useState(10000); // Example target: $10,000
//   const [donated, setDonated] = useState(3000); // Example donated: $3,000
//   const [amount, setAmount] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleDonation = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     // Backend integration for payment (not included here)
//     console.log("Processing donation of", amount);
//     setDonated((prev) => prev + parseFloat(amount));
//   };

//   const chartData = {
//     labels: ["Donated", "Remaining"],
//     datasets: [
//       {
//         data: [donated, target - donated],
//         backgroundColor: ["#4CAF50", "#FF5252"],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Donate to Our Cause
//         </h1>
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Pie Chart */}
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">
//               Donation Progress
//             </h2>
//             <div className="relative w-full h-64">
//               <Pie data={chartData} options={chartOptions} />
//             </div>
//             <p className="mt-4 text-gray-600">
//               Target: <strong>${target.toLocaleString()}</strong>
//             </p>
//             <p className="text-gray-600">
//               Donated: <strong>${donated.toLocaleString()}</strong>
//             </p>
//             <p className="text-gray-600">
//               Remaining: <strong>${(target - donated).toLocaleString()}</strong>
//             </p>
//           </div>

//           {/* Donation Form */}
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">
//               Donate Now
//             </h2>
//             <Elements stripe={stripePromise}>
//               <form
//                 onSubmit={handleDonation}
//                 className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner"
//               >
//                 <label className="block">
//                   <span className="text-gray-700">Amount (USD):</span>
//                   <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     placeholder="Enter amount"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="text-gray-700">Payment Details:</span>
//                   <CardElement className="p-2 border rounded-md bg-white" />
//                 </label>
//                 <button
//                   type="submit"
//                   disabled={!stripe}
//                   className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300"
//                 >
//                   Donate ${amount || "0"}
//                 </button>
//               </form>
//             </Elements>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;

import React from 'react'

const Donate = () => {
  return (
    <div>
      Donate page
    </div>
  )
}

export default Donate

