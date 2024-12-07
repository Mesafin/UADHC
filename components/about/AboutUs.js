import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto ">
        <div className=" px-6 md:px-8  text-accent2 font-montserrat">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/about.png"
                alt="About Us"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold text-center md:text-start mb-6">ABOUT US</h2>
              <p className=" xl:leading-relaxed px-6 md:px-0 pb-6">
                At Uplifting Adult Day Center, we are dedicated to providing a
                nurturing, friendly, and safe environment to every senior of
                South Los Angeles regardless of race, religion, or nationality.
                Our qualified staff is committed to helping each senior grow and
                continue to live at home. We take pride in our highly trained
                and certified staff that shares our mission of providing
                enriching activities, counseling, and all the essential
                resources and services our family members need. We are making
                sure to give affordable services to our participants through
                assistance and funds from our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
