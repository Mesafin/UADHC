import Image from "next/image";
import elderlyCare from "../../public/home/adventure2.png";
import Link from "next/link";
import RotatingCards from "./RotatingCards";

const ServicesSection = () => {
  return (
    <div className="pt-12 md:my-6" style={{ backgroundColor: "#F3F3F3" }}>
      {/* Container */}

      {/* Red Section */}
      <div className="topSvg"></div>
      <div
        style={{
          backgroundColor: "#CC3333",
        }}
        className=" text-white py-12 relative"
      >
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="p-6 font-montserrat">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-chunk border-l-8 border-white ps-4">
              A Place to Thrive
            </h3>
            <p className="mb-6">
            Our center is buzzing with fun and excitement, offering a mix of social events, physical activities, and creative projects. With our dedicated team, you’ll find a supportive community where friendships blossom and every participant feels right at home
            </p>
            <h4 className="text-xl font-bold mb-4 hidden md:block">
              Come Join the Fun!
            </h4>
            <p className="mb-6 hidden md:block">
              Curious to see what we’re all about? Contact us to ask questions
              or schedule a visit. We can’t wait to show you around and welcome
              you into our lively community!
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
      <div className="bottomSvg bg-gray-100"></div>
      <div className="container mx-auto pb-12 bg-gray-100 ">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-accent lg:text-4xl font-bold text-center mb-4 md:mb-16">
          Our Services
        </h2>


        <RotatingCards />

        {/* Button */}
        <div className="text-center my-4 pt-10">
          <Link href="/services">
            <button className="bg-accent2 text-white hover:text-slate-200 px-6 py-3 rounded-full font-montserrat hover:bg-accent">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
