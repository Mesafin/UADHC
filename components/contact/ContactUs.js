
"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2"; 
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { MapSection } from "./MapSection";

export default function ContactUs() {
  const form = useRef(); 

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      services: formData.get("user_services"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Thank you for contacting us! We will get back to you soon.",
          confirmButtonColor: "#3085d6",
        });
        e.target.reset(); // Reset the form after successful submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error || "Something went wrong. Please try again later.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="font-montserrat text-accent">
      {/* Header Section */}
      <section className="bg-gray-100 py-8 px-8 md:pt-12 md:pb-20 text-center">
        <div className="w-full md:w-4/5 text-center mx-auto text-sm md:text-lg">
          <p className="text-gray-600 mt-4">
            Do you want to schedule a tour of our
            center? Do you have any questions?
          </p>
          <p className="text-gray-600 mt-2">
            Please fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <ContactInfo />

      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[500px] container mx-auto mb-16">
        {/* Form Section */}
        <ContactForm form={form} sendEmail={sendEmail} />

        {/* Map Section */}
        <MapSection />
      </div>
    </div>
  );
}
