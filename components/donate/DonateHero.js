import React from 'react'

const DonateHero = () => {
  return (
    <div 
    className="relative h-72 flex justify-center items-center bg-center bg-cover"
    style={{
      backgroundImage: "url('/pageHero.png')",
    }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-80"></div>

    {/* Text Content */}
    <h1 
      className="relative text-center text-3xl md:text-5xl text-accent2 font-bold"
    >
      Donate
    </h1>
  </div>
  )
}

export default DonateHero
