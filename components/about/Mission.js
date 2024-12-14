import React from "react";

const Mission = () => {
  const missionPoints = [
    "Understanding physical, mental, and dietary conditions",
    "Planning of field trips and recreational activities",
    "Leading participants with care and smile",
    "Indulging residents with personalized attention",
    "Family support and involvement at every step",
    "Trained and certified staff",
    "Individualized meal plans and activities",
    "Nurturing each participant regardless of their background",
    "Giving homely vibes to everyone",
  ];

  return (
    <div className="container mx-auto">
      <div className="py-12 px-6 md:px-8 bg-white font-montserrat">
        <h2 className="text-4xl font-bold text-accent2 pb-6">
          Our <span className="text-uRed">Mission </span> and{" "}
          <span className="text-uRed">Vision</span>
        </h2>

        <section className=" text-accent2 my-4 md:my-10 ">
          <div className="items-center">
            <div className="text-2xl p-4  text-center">
              <span className="text-uRed text-3xl font-bold mr-6">
                Mission :
              </span>
              To enhance lives through compassionate, personalized care in a
              nurturing and engaging environment.
            </div>
            <div className="text-2xl p-4  text-center mt-4 md:mt-8">
              <span className="text-uRed text-3xl font-bold mr-6">
                Vision :
              </span>
              To set a new standard in adult day care, building a community
              where individuals discover happiness, purpose, and connection.
            </div>
          </div>
        </section>

        <h3 className="text-4xl font-bold text-accent2 py-4 md:pt-10 md:pb-6">
          Our <span className="text-uRed">Core Values</span>
        </h3>
        {/* <ul className=" text-accent2 ps-2 md:ps-20 text-xl px-4 py-6 rounded-lg space-y-2 md:space-y-3">
          <li className="flex items-center ">
            <span className="text-uRed font-semibold  mr-2 text-2xl"> 1. Integrity: </span>
            Transparency and professionalism guide every interaction.
          </li>
          <li className="flex items-center">
            <span className="text-uRed font-semibold  mr-2 text-2xl"> 2. Compassion: </span>
            Empathy drives every decision, ensuring participants feel supported.
          </li>
          <li className="flex items-center">
            <span className="text-uRed font-semibold mr-2 text-2xl"> 3. Innovation: </span>
            We continuously evolve to meet the changing needs of our community.
          </li>
        </ul> */}

        {/* <p className="text-accent2 leading-relaxed my-6">
          We are a warm and welcoming community. We provide a safe, friendly
          space where everyone feels valued and respected. Our dedicated team of
          professionals offers a variety of activities, counseling, and support
          services to help seniors thrive and maintain their independence. We’re
          committed to keeping our programs affordable through community
          partnerships and support.
        </p> */}
        {/* <p className="text-accent2 leading-relaxed mb-6">
          We believe in creating a vibrant community where seniors can connect,
          learn, and grow. Our focus is on providing holistic care that
          addresses physical, mental, and emotional well-being.
        </p>
        <p className="text-accent2 leading-relaxed mb-8">
          By offering our seniors care, fitness, and engagement, we affirm the
          resilence and <strong>"Uplifting"</strong> of human spirits.
        </p> */}
        <div className="flex flex-col md:flex-row items-center">
          {/* <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="list-disc list-inside text-accent2 ">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-600 text-lg mr-2">●</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-accent2 text-start mt-4">
              Our goal is to create a home away from home where participants
              feel happy, healthy, and fulfilled.
            </p>
          </div> */}

<ul className=" text-accent2 ps-2 text-xl px-4 py-6  space-y-2 md:space-y-3">
          <li className="">
            <span className="text-uRed font-semibold text-2xl mr-2"> 1. Integrity: </span>
            Transparency and professionalism guide every interaction.
          </li>
          <li className="">
            <span className="text-uRed font-semibold  mr-2 text-2xl"> 2. Compassion: </span>
            Empathy drives every decision, ensuring participants feel supported.
          </li>
          <li className="">
            <span className="text-uRed font-semibold mr-2 text-2xl"> 3. Innovation: </span>
            We continuously evolve to meet the changing needs of our community.
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
