import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png";
import heroImage from "../public/extracted_background.jpg";
import heroImagePple from "../public/heroImagePpl.png";
import Link from 'next/link';

const Hero = () => {
  return (
    <div>


    {/* Hero Section */}
    <section className="hero">
      {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Welcome to Uplifting Adult Day Care Center!
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Located in the Heart of Inglewood, We’re More Than Just a Day Care – We’re a Community!
      </p>
      <p className="mt-4 max-w-2xl mx-auto">
        At Uplifting Adult Day Care Center, we believe every day should be filled with joy, comfort, and connection. Whether you’re seeking a supportive environment for yourself or a loved one, our center is here to provide a nurturing space where everyone can thrive.
      </p>
      <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500">
        Learn More
      </button>
    </div> */}
      <div className="hero-section relative">
        <Image
          className="hero-background"
          src={heroImage}
          alt="Hero Background"
        />
        {/* <Image
          className="hero-people absolute"
          src={heroImagePple}
          alt="People in Hero Section"
        /> */}
      </div>
    </section>
    {/* <Link href="/about">
      <button className="bg-red-600 buttonPos text-white font-semibold px-6 py-3 rounded-full hover:bg-red-500 transition duration-300 ease-in-out">
        Learn More
      </button>
    </Link> */}

   
  </div>
  )
}

export default Hero
