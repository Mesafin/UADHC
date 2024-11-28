import Image from "next/image";
import { FaUserNurse, FaRunning, FaUtensils, FaHouseUser, FaClinicMedical } from "react-icons/fa";
import elderlyCare from "../public/home/adventure2.png"
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="pt-12 md:my-6" style={{backgroundColor: "#F3F3F3"}}>
      {/* Container */}
      <div className="container mx-auto px-6 py-4 md:pt-10 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl text-accent lg:text-4xl font-bold text-center mb-20 md:mb-16">
          Uplifting Adult Day Care Center Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 ">
          <ServiceCard
            icon={<FaUserNurse size={40} className="text-gray-600" />}
            title="Nursing Services"
          />
          <ServiceCard
            icon={<FaClinicMedical size={40} className="text-gray-700" />}
            title="Therapeutic Care"
          />
          <ServiceCard
            icon={<FaRunning size={40} className="text-gray-700" />}
            title="Outings"
          />
          <ServiceCard
            icon={<FaHouseUser size={40} className="text-gray-700" />}
            title="Recreational Activities"
          />
          <ServiceCard
            icon={<FaUtensils size={40} className="text-gray-700" />}
            title="Nutritional Meals"
          />
        </div>

        {/* Button */}
        <div className="text-center">
            <Link href="/services">
          <button className="bg-uRed text-white px-6 py-2 rounded-full font-montserrat hover:bg-red-600">
            Our Services
          </button>
            </Link>
        </div>
      </div>

      {/* Red Section */}
      <div className="topSvg">
        
      </div>
      <div style={{
        backgroundColor: "#CC3333"
      }} className=" text-white py-12 relative">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="p-6 font-montserrat">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-chunk border-l-8 border-white ps-4">A Place to Thrive</h3>
            <p className="mb-6">
              Welcome to Uplifting Adult Day Care Center – where every day is an adventure! Our
              center is buzzing with fun and excitement, offering a mix of social events, physical
              activities, and creative projects. With our dedicated team, you’ll find a supportive
              community where friendships blossom and every participant feels right at home.
            </p>
            <h4 className="text-xl font-bold mb-4 hidden md:block">Come Join the Fun!</h4>
            <p className="mb-6 hidden md:block">
              Curious to see what we’re all about? Contact us to ask questions or schedule a visit.
              We can’t wait to show you around and welcome you into our lively community!
            </p>
            <Link href="/about">
            <button className="bg-white text-footerBg font-bold px-6 py-2 rounded-full hover:bg-gray-100">
              About Us
            </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative ">
            <Image
              src={elderlyCare}
              alt="Elderly care"
              width="auto"
              height={500}
              className="rounded-full text-center"
            />
          </div>
        </div>
      </div>
      <div className="bottomSvg">
        
      </div>
    </div>
  );
};




export default ServicesSection;
