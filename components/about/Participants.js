// components/Participants.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Participants = () => {
  return (
    <div className="bg-uRed py-12 lg:py-20 px-6 my-2 lg:my-12 md:px-8">
        <div className='container mx-auto'>
            
       
      <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-2/5">
          <Image
            src="/participants.png"
            alt="uplifting Participants image"
            className=" w-full px-0 lg:px-4"
            height={500}
            width={500}
          />
        </div>
        <div className="md:w-3/5 mb-8 md:mb-0 text-white">
          <h2 className="text-4xl font-bold mb-6">
          Our <span className="text-black"> Precious Participants!</span>
          </h2>
          <p className="leading-relaxed mb-6">
            You will find yourself around the scenic beauty of Inglewood with amazing companions, and certified trained staff taking care of your health and providing you various opportunities to showcase your creativity. There is always plenty going on in our care center: music, field trips, games, exciting activities, and other entertainers.
          </p>
          <p className="leading-relaxed">
            For more information about our center, do contact us. We would love to answer all of your queries and confusions.
          </p>
          <Link href="/contact">
          
          <button type='button' className="mt-6 font-montserrat rounded-br-3xl bg-uRed py-2 px-6 border-white border-2 font-semibold hover:bg-red-700 hover:text-yellow-50 hover:border-red-100 transition">
            Contact Us <span className=''> →</span>
          </button>
          </Link>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Participants;
