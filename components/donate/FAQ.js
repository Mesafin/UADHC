"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an Adult Day Care Center?",
      answer:
        "An adult day care center is a place that provides care and companionship for adults who need assistance or supervision during the day.",
    },
    {
      question: "Are there any transportation options?",
      answer:
        "Yes, we offer transportation options to and from the day care center. Contact us for more details.",
    },
    {
      question: "How much funds can we give?",
      answer:
        "The funds you can contribute vary depending on the services. Please contact us for a tailored recommendation.",
    },
    {
      question: "What services Uplifting Day Care Center is providing?",
      answer:
        "We provide a range of activities, including nursing, recreational activities, hot nutritious meals, transportation, field trips, psychological sessions, and therapies of every type. Check our services page for detailed information.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="py-6 md:py-8 -mb-6"
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <div className=" container mx-auto p-8 font-montserrat">
        <h2 className="text-2xl font-bold text-center mb-6 text-accent2">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              style={{
                backgroundColor: "#F7F9FB",
              }}
              key={index}
              className=" p-4 border-gray-300 "
            >
              <button
                className="flex justify-between items-center w-full pr-5 text-left text-lg font-bold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <span className="rotate-180 text-accent2 transition-transform w-24 h-full ">
                      <FaArrowUpLong />
                    </span>
                  ) : (
                    <span className="text-accent2 w-24 h-full">
                      <IoChevronDown />
                    </span>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 ps-8 text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
