"use client";

import { useState, useEffect } from "react";

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setSubmitted(true);

        // Auto-close popup after 5 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        // alert("Failed to subscribe. Please try again.");

        setSubmitted(true);

        // Auto-close popup after 5 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 relative">
        
        {!submitted ? (
            <>
            <button
          className="absolute top-6 text-2xl right-4 md:right-6 text-uRed hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
         
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-montserrat font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-lg text-accent2 font-montserrat mb-4">
              Stay updated with the latest news and offers.
            </p>
            <input
              type="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border text-black border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border text-black border-gray-300 p-2 rounded mb-4"
            />

            <button
              type="submit"
              className="w-full bg-accent2 text-white py-2 rounded hover:bg-accent"
            >
              Subscribe
            </button>
          </form>
          </>
        ) : (
          <div className="text-center font-montserrat">
            <h2 className="text-xl font-bold mb-4 text-accent2">Thank you!</h2>
            <p className="text-sm text-accent2">
              You have successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;
