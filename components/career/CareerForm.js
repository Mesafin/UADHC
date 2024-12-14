"use client";
import { useState } from "react";
import Swal from "sweetalert2"; 

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [isDisabled, setIsDisabled] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); 
    setIsDisabled(true); 

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);

    try {
      const response = await fetch("/api/career/upload", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully",
          text: "We have received your application. Thank you for applying!",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", email: "", phone: "", address: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.error || "Something went wrong. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while submitting the form. Please try again.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsLoading(false); 
      setIsDisabled(false); 
    }
  };

  return (
    <div className="container w-full mx-auto font-montserrat px-8 my-8 md:my-16">
      <div
        style={{
          backgroundImage: "url('/svg/blob-scene-haikei.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-4xl text-center font-bold mb-4">Career Opportunity</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full mx-auto md:w-1/2 shadow-md hover:shadow-xl rounded-lg p-6"
        >
          <div className="mb-4">
            <label className="block text-uRed font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Name"
              className="w-full border-2 rounded py-2 px-3 text-accent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-uRed font-semibold">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border-2 rounded py-2 px-3 text-accent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-uRed font-semibold">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Phone Number"
              className="w-full border-2 rounded py-2 px-3 text-gray-800"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-uRed font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your Address"
              className="w-full border-2 rounded py-2 px-3 text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="bg-uRed text-white py-2 px-4 rounded hover:bg-red-700"
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
    </div>
  );
}
