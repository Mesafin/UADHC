import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="container mx-auto">
      <div className="py-12 px-6 md:px-8 bg-white font-montserrat">
        <h2 className="text-4xl font-bold text-accent2 pb-6">
          Our <span className="text-uRed">Mission </span> and{" "}
          <span className="text-uRed">Vision</span>
        </h2>

        {/* <section className=" text-accent2 my-4 md:my-10 ">
          <div className="items-center">
            <div className="text-2xl p-4 text-start  md:text-center">
              <span className="text-uRed text-3xl font-bold mr-6">
                Mission :
              </span>
              To enhance lives through compassionate, personalized care in a
              nurturing and engaging environment.
            </div>
            <div className="text-2xl p-4 text-start md:text-center mt-4 md:mt-8">
              <span className="text-uRed text-3xl font-bold mr-6">
                Vision :
              </span>
              To set a new standard in adult day care, building a community
              where individuals discover happiness, purpose, and connection.
            </div>
          </div>
          <Image
          src="/participants.png"
          width={500}
          height={500}
          />
        </section> */}
        <section className="text-accent2 my-4 md:my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Mission Section */}
            <div className="p-4 text-start md:text-center">
              <span className="text-uRed text-3xl font-bold mr-6">
                Mission:
              </span>
              <p className="text-2xl">
                To enhance lives through compassionate, personalized care in a
                nurturing and engaging environment.
              </p>
            </div>
            <div className="relative w-80 h-80 mx-auto hidden md:block">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/home/image4.png')",
                  clipPath:
                    "path('M150 0C230 0 300 60 300 140C300 240 150 300 150 300C150 300 0 240 0 140C0 60 70 0 150 0Z')",
                }}
              ></div>
            </div>

            {/* Vision Section */}
            <div className="relative w-80 h-80 mx-auto ">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/home/image1.png')",
                  clipPath:
                    "path('M150 0C230 0 300 60 300 140C300 240 150 300 150 300C150 300 0 240 0 140C0 60 70 0 150 0Z')",
                }}
              ></div>
            </div>
            <div className="p-4 text-start md:text-center">
              <span className="text-uRed text-3xl font-bold mr-6">Vision:</span>
              <p className="text-2xl">
                To set a new standard in adult day care, building a community
                where individuals discover happiness, purpose, and connection.
              </p>
            </div>
           
          </div>
        </section>

        <h3 className="text-4xl font-bold text-accent2 ">
          Our <span className="text-uRed">Core Values</span>
        </h3>

        <div className="flex flex-col md:flex-row items-center">
          <ul className=" text-accent2 ps-2 text-xl px-4  space-y-2 md:space-y-3">
            <li className="">
              <span className="text-uRed font-semibold text-2xl mr-2">
                {" "}
                1. Integrity:{" "}
              </span>
              Transparency and professionalism guide every interaction.
            </li>
            <li className="">
              <span className="text-uRed font-semibold  mr-2 text-2xl">
                {" "}
                2. Compassion:{" "}
              </span>
              Empathy drives every decision, ensuring participants feel
              supported.
            </li>
            <li className="">
              <span className="text-uRed font-semibold mr-2 text-2xl">
                {" "}
                3. Innovation:{" "}
              </span>
              We continuously evolve to meet the changing needs of our
              community.
            </li>
          </ul>
          <div className="md:w-1/2">
            <img
              src="/outling.png"
              alt="uplifting day center Mission image"
              className="rounded-lg shadow-lg w-full max-h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
