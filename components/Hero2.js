"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "../public/hero/slide-1.webp";
import slider2 from "../public/hero/slide-2.webp";
import slider3 from "../public/hero/slide-3.png";
import slider4 from "../public/hero/slider-4.png";
import slider5 from "../public/hero/slider-5.png";
import svg from "../public/svg/blob-haikei.svg";
import Link from "next/link";

const Hero2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider3, slider4, slider5];

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section
      className="relative flex items-center bg-white bg-cover bg-center"
      style={{
        backgroundImage: "url(/svg/low-poly-grid-haikei.svg)",
        // borderTopRightRadius: "150px",
        // borderBottomLeftRadius: "150px",
      }}
    >
      <div className="absolute inset-0  bg-white opacity-70"></div>
      <div className="container mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-center relative z-10 px-6 py-16 lg:py-32">
        {/* Left Side (Text and Button) */}
        <div className="w-full md:w-1/2 text-black md:px-20 ">
          <h1 className="text-4xl font-semibold text-uRed font-chunk tracking-wider mb-4 lg:mb-6 ps-5" style={{
            borderLeft: "6px solid #c33333"
          }}>
            {" "}
            Welcome to Uplifting Adult Day Care Center!
          </h1>
          <p className=" text-xl font-montserrat text-slate-900 font-bold mb-4 lg:mb-6">
            Located in the Heart of Inglewood, We're More Than Just a Day Care -
            We're a Community!
          </p>
          <p className="text-slate-900 font-bold sm:text-sm lg:text-lg font-montserrat mb-8">
            At Uplifting Adult Day Care Center, we believe every day should be
            filled with joy, comfort, and connection. Whether you're seeking a
            supportive environment for yourself or a loved one, our center is
            here to provide a nurturing space where everyone can thrive.
          </p>
          <Link href="/about">
            <button className="bg-uRed text-white px-5 py-2 lg:text-lg rounded-full hover:bg-red-500 transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Side (Sliding Images) */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className="slider w-full h-[300] md:h-[500px] rounded-full absolute">
            <div
              className="slide-container"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="slide">
                  <Image
                    src={slide}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
