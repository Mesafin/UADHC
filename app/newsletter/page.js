"use client";
import NewsletterButton from "@/components/NewsletterButton";
import { useState } from "react";

export default function NewsletterPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!name || !email) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      // Simulate API call or add your actual API endpoint here
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setFormData({ name: "", email: "" }); // Reset form
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Error submitting. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <NewsletterButton />
      <div className="newsletter-container bg-accent text-white tracking-wider font-chunk mt-20 p-8">
        <div className="newsletter-content text-center">
          <h2 className="tracking-wider text-4xl mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="mb-6">
            Stay updated with the latest news, exclusive offers, and insights.
            Subscribe for updates and exclusive offers!
          </p>
          <form
            className="newsletter-form flex flex-col items-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field p-2 w-full max-w-md rounded-md border border-gray-300 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="input-field p-2 w-full max-w-md rounded-md border border-gray-300 text-black"
            />
            <button
              type="submit"
              className="submit-button bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-300"
            >
              Submit
            </button>
          </form>
          {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
      </div>
    </div>
  );
}
