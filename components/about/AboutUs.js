import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto ">
        <div className=" px-6 md:px-8  text-accent2 font-montserrat">
          <div className="flex flex-col md:flex-row items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/about.png"
                alt="uplifting About Us image"
                className="w-full"
                height={500}
                width={400}
                loading="lazy"
              />
            </div>

            {/* <div className="relative w-80 h-80 mx-auto my-24 ">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/about-hero.png')",
                  clipPath:
                    "path('M150 0C230 0 300 60 300 140C300 240 150 300 150 300C150 300 0 240 0 140C0 60 70 0 150 0Z')",
                }}
              ></div> 
            </div> */}
            <div className="md:w-1/2 ">
              <h2 className="text-2xl md:text-4xl font-bold text-center md:text-start mb-6">
                ABOUT US
              </h2>
              <h2 className="text-2xl font-bold text-center md:text-start mb-4">
                Our Story: Built on Passion, Purpose, and People
              </h2>

              <p className=" xl:leading-relaxed px-6 md:px-0 pb-6">
                We are committed to provide a supportive and empowering
                environment where individuals feel valued, connected, and
                respected. We offer personalized care tailored to each
                participant’s needs, fostering dignity and building meaningful
                relationships. Our center combines a nurturing atmosphere with
                engaging activities to enhance the quality of life for seniors
                while giving families peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
