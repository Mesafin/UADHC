"use client";
import React from "react";
import Image from "next/image";
import {
  FaClinicMedical,
  FaHouseUser,
  FaRunning,
  FaUserNurse,
  FaUtensils,
} from "react-icons/fa";

const RotatingCards = () => {
  const cards = [
    {
      id: 1,
      front: {
        icon: <FaUserNurse />,
        title: "Nursing Services",
        text: "We are dedicated to ensuring your health and comfort.",
      },
      back: {
        image: "/home/image3.png",
        title: "Nursing Services",
        text: "Compassionate nursing services to meet your health needs, providing assistance with daily activities and personal care.",
      },
    },
    {
      id: 2,
      front: {
        icon: <FaClinicMedical />,
        title: "Therapeutic Care",
        text: "Tailored therapies that help enhance your quality of life.",
      },
      back: {
        image: "/home/image2.png",
        title: "Therapeutic Care",
        text: "Holistic therapeutic care focusing on improving your overall well-being through various physical and mental health activities.",
      },
    },
    {
      id: 3,
      front: {
        icon: <FaRunning />,
        title: "Exciting Outings",
        text: "Join us for fun trips designed to enrich your day!",
      },
      back: {
        image: "/home/image4.png",
        title: "Outings",
        text: "Engaging outings to local attractions and events, promoting social interaction and a sense of community.",
      },
    },
    // {
    //   id: 4,
    //   front: {
    //     icon: <FaHouseUser />,
    //     title: "Recreational Activities",
    //     text: "Explore arts, crafts, games, and more with us!",
    //   },
    //   back: {
    //     image: "/home/participant2.png",

    //     title: "Recreational Activities",
    //     text: "Participate in a variety of recreational activities that foster creativity, enjoyment, and social connections.",
    //   },
    // },
    {
      id: 5,
      front: {
        icon: <FaUtensils />,
        title: "Nutritional Meals",
        text: "Our meals are balanced, and designed to nourish your body.",
      },
      back: {
        image: "/home/image5.png",
        title: "Nutritional Meals",
        text: "Delicious, nutritious meals prepared with care to meet individual dietary needs, ensuring you eat well and feel great.",
      },
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 md:gap-6 xl:gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative w-80 md:w-60 h-96 [perspective:1000px] rounded-2xl"
          >
            <div className="relative w-full h-full rounded-2xl shadow-lg transform transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              {/* Back Side */}
              <div className="absolute w-full h-full bg-slate-100 text-accent2 font-montserrat text-center shadow-lg [backface-visibility:hidden] transform rotate-x-180">
                <div className="flex flex-col justify-start w-full px-2 md:px-6 py-2 md:py-4 items-center h-full">
                  <Image
                    src={card.back.image}
                    alt={card.back.title}
                    width={200}
                    height={150}
                    className="w-full"
                  />
                  <h3 className="text-xl font-bold mt-2">{card.back.title}</h3>
                  <p className="mt-2">{card.back.text}</p>
                </div>
              </div>
              {/* Front Side */}
              <div className="absolute w-full h-full text-center rounded-2xl shadow-lg [backface-visibility:hidden] font-montserrat">
                <div className="flex flex-col  justify-end items-center h-full bg-slate-400 p-6 ">
                  <span className="text-5xl text-slate-100">{card.front.icon}</span>
                  <h3 className="text-2xl text-white font-bold my-4 md:my-6">{card.front.title}</h3>
                  <p className="text-white mb-4 md:mb-8">{card.front.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RotatingCards;
