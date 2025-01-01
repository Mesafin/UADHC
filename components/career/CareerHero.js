import React from 'react';

const CareerHero = () => {
  return (
    <div 
      className="relative h-72 flex justify-center items-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/pageHero.png')",
      }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

      {/* Text Content */}
      <h2 
        className="relative text-center text-2xl md:text-4xl text-black font-bold md:pt-32 "
      >
        Career Opportunities
      </h2>
    </div>
  );
};

export default CareerHero;
