"use client";
import NewsletterPopup from "@/components/NewsletterPopup";
import { useEffect, useState } from "react";

export default function NewsletterButton() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true");
      }, 10000); // Show after 10 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className=" font-montserrat text-xl text-center">
      <p className="my-8">Get the Latest Updates</p>

      <button
        type="button"
        onClick={() => setShowPopup(true)}
        className="text-center items-center mx-auto flex border-2 rounded-lg border-uRed px-4 py-2 hover:bg-uRed hover:text-white"
      >
        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 5.487c.66 0 1.308.232 1.812.65 1.006.83 1.45 2.098 1.145 3.303a4.656 4.656 0 01-3.06 3.303 4.67 4.67 0 01-3.313-.146l-6.207 3.575a2 2 0 01-1.972-3.437l6.16-3.548a4.675 4.675 0 01-.146-3.312 4.666 4.666 0 013.304-3.06c1.205-.305 2.474.14 3.304 1.145.417.504.65 1.153.65 1.812v.014zm-2.745 5.23a2.125 2.125 0 100-4.25 2.125 2.125 0 000 4.25z" />
  </svg>
        Subscribe to our Newsletter
      </button>
      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
    </main>
  );
}
