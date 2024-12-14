// components/TransportSectionWithImage.tsx
import React from "react";

const TransportSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-8 gap-8 mt-6 mb-12 md:mt-10 md:mb-20">

      {/* right Text Section */}
      <div className="flex-1 w-full md:w-3/5 font-montserrat">
        <h2 className="text-4xl font-extrabold mb-4 border-l-8 border-uRed ps-4">Transportation & Accessibility</h2>
        <p className="font-bold text-uRed my-6">Everyone can Travel with Ease!</p>
        <p className="text-gray-700 mb-4">
          We believe that everyone deserves the freedom to explore and connect. That’s why we
          offer convenient and reliable transportation services throughout South Los Angeles, including Compton, Inglewood, Hawthorne, Gardena, Lennox, Westmont, Hyde Park, Knolls, Manchester Square, and beyond. Our accessible vehicles ensure individuals of all abilities can participate fully in our programs.
        </p>
     
      </div>
      {/* left Image Section */}
      <div className="flex-shrink-0 w-full md:w-2/5">
        <img
          src="/transpo.png" 
          alt="Transportation Services at uplifting day center"
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>
      
    </div>
  );
};

export default TransportSection;
