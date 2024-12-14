'use client'
import { useState } from "react";

export function ContactForm({ form, sendEmail }) {
  const [isLoading, setIsLoading] = useState(false); 
  const [isDisabled, setIsDisabled] = useState(false); 

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setIsDisabled(true); 
    await sendEmail(e); 
    setIsLoading(false);
    setIsDisabled(false); 
  };

  return (
    <section className="py-12 ms-0 lg:ms-8 w-full lg:w-1/2 bg-gray-100 font-montserrat h-full">
      <div className="px-4 h-full flex flex-col justify-center">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-accent text-center mb-6">
            Contact Us For More Information.
          </h2>
          <p className="text-gray-600 text-center mb-8">We’ll be in touch shortly.</p>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-6 mx-8"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-accent"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-accent"
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Phone"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-accent"
          />
          <input
            type="text"
            name="user_services"
            placeholder="Services"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="border border-gray-300 rounded-lg p-3 w-full md:col-span-2 focus:outline-none focus:ring focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-uRed text-white rounded-lg py-3 px-6 hover:bg-red-500 transition md:col-span-2"
            disabled={isDisabled}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1-16 0"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
