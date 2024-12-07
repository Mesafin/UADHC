"use client";
import React, { useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function ContactUs() {
  const form = useRef(); // Create a reference to the form

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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4 py-4">
          {/* Address */}
          <div className="bg-uRed text-white rounded-lg shadow-md p-6 md:py-10 text-center">
            <div className="flex justify-center items-center text-5xl mb-4">
              <MdLocationPin className="text-5xl text-white" />
            </div>
            <p className="text-lg font-bold">
            Electric Ave 508 N, Inglewood, CA
              
            </p>
          </div>

          {/* Phone */}
          <div className="text-white rounded-lg bg-greyCon shadow-md p-6 md:py-10 text-center">
            <div className="flex justify-center items-center text-5xl mb-4">
              <FaPhoneAlt />
            </div>
            <p className="text-lg font-bold">+1 (626) 232 1582</p>
          </div>

          {/* Email */}
          <div className="text-white bg-accent rounded-lg shadow-md p-6 md:py-10 text-center">
            <div className="flex justify-center items-center text-5xl mb-4">
              <IoIosMail />
            </div>
            <p className="text-lg font-bold">filimon@uadhc.com</p>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[500px] container mx-auto mb-16 ">
        {/* Form Section */}
        <section className="py-12 ms-0 lg:ms-8 w-full lg:w-1/2 bg-gray-100 font-montserrat h-full">
          <div className="px-4 h-full flex flex-col justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-accent text-center mb-6">
                Contact Us For More Information.
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We’ll be in touch shortly.
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail} 
              className="grid lg:grid-cols-2 gap-6 mx-8 "
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
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full lg:w-1/2 h-[500px] lg:h-full py-8 lg:py-0 px-8 lg:ps-12">
          <div className="h-full">
            <iframe
              className="w-full h-full border border-gray-300 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.888406665729!2d-118.14200382501453!3d34.09799911531418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c4e1232f147d%3A0xb70ee2688d19ed24!2s508%20N%20Electric%20Ave%2C%20Alhambra%2C%20CA%2091801%2C%20USA!5e0!3m2!1sen!2sjp!4v1732860692089!5m2!1sen!2sjp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>

    
    </div>
  );
}
