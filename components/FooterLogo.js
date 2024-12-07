'use client'
import React from "react";
import footerlogo from "../public/favicon3.png";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="flex flex-row bg-gray-100 overflow-hidden relative py-5 h-[150px]">
      <div className="absolute flex w-[200%] animate-slide">
        {/* First Image */}
        <div className="flex-shrink-0 w-1/2 flex items-center justify-center ">
          <Image
            src={footerlogo}
            alt="logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
        {/* Duplicate Image */}
        <div className="flex-shrink-0 w-1/2 flex items-center justify-center">
          <Image
            src={footerlogo}
            alt="logo duplicate"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterLogo;
