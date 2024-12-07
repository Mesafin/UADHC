import React from 'react'

const ResourceHero = () => {
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
      className="relative text-center text-4xl md:text-5xl text-gray-700 font-bold"
    >
      Resources
    </h1>
  </div>
  )
}

export default ResourceHero
