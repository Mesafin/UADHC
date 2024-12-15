"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="newsletter container mx-auto">
      <div className="newsletter bg-gray-100 p-4 rounded-md shadow-md">
        <form className="flex md:flex-row gap-4" onSubmit={handleSubmit}>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent2"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      {status === "success" && <p>Thank you for subscribing!</p>}
      {status === "error" && <p>Oops! Something went wrong.</p>}
    </div>
  );
};

export default NewsletterForm;
