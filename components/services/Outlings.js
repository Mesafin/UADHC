import Image from "next/image";
import React from "react";

const Outlings = () => {
  return (
    <>
      {/* Section: Outings & Adventures */}
      <section className="bg-white text-gray-800 py-16 mt-8 md:my-14 container mx-auto px-4 font-montserrat">
        <div className=" flex flex-col-reverse md:flex-row gap-8 justify-between lg:gap-14">
        <div className="flex justify-center w-full md:w-1/2">
            <Image
              src="/outling.png"
              alt="Outings"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                
           
          <h2 className="text-5xl font-bold mb-4 border-l-8 border-uRed ps-4">Outings & Adventures</h2>
          <h3 className="text-uRed font-semibold mb-4">
            Uplift Your Spirits with Nature and Society!
          </h3>
          <p className="mb-8">
            Discover the world around you with our exciting outings and
            excursions. From the sandy shores of the beach to our city’s
            cultural treasures, we offer various opportunities for exploration
            and enjoyment. Our goal is to enrich lives through new experiences
            and social connections.
          </p>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Outlings;
