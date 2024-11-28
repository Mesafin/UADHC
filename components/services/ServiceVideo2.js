"use client"
import { useState } from "react";

const ServiceVideo2 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="container mx-auto px-4 font-montserrat">
      <div className="mt-12 mb-20 text-center">
        <h3 className="text-xl font-semibold text-uRed mb-4">
          Uplifting Your Life, One Day at a Time
        </h3>
        <p className="text-accent text-xl">
          At Uplifting Adult Day Center, we believe that every day is an
          opportunity for growth, connection, and joy. Our programs are designed
          to nourish your mind, body, and spirit. We’re committed to creating a
          vibrant community where you can rediscover your passions, make new
          friends, and feel truly valued. Let us be your partner in creating a
          fulfilling and enriching life.
        </p>
      </div>
      {/* YouTube video or thumbnail */}
      <div className="relative w-full mx-auto my-5 lg:my-12">
        {!isVideoPlaying ? (
          <div className="relative cursor-pointer" onClick={handlePlayVideo}>
            <img
              src="./thumbnail.png" // Replace with the path to your custom thumbnail
              alt="Custom Thumbnail"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-16 h-16"
              >
                <path d="M10 17l6-5-6-5z" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-[315px] md:h-[450px] lg:h-[560px] rounded-lg shadow-md"
            src="https://www.youtube.com/embed/mcLUmalmcqY?si=Qjx8rwvxz2u4nxlc"
            title="Uplifting Adult Day Center Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ServiceVideo2;
