import ServiceCard from "../ServiceCard";
import ServiceItems from "./ServiceItems";
import { FaUserNurse, FaRunning, FaUtensils, FaHouseUser, FaClinicMedical } from "react-icons/fa";
import serviceHeroImage from "../../public/services-hero.png"


const ServicesHero = () => {
  return (
    <>
 
      <div 
      className="relative h-72 flex justify-center items-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/pageHero.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Text Content */}
      <h1 
        className="relative text-center text-4xl md:text-5xl text-gray-700 font-bold"
      >
               Our Services</h1>

     
    </div>
  
    <div className=" py-12 font-montserrat">
  <div className="container mx-auto px-4">
    {/* Background Container */}
    <div
      className="relative overflow-hidden rounded-lg h-auto"
    >
   

    

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-accent">
        {/* <h1 className="text-5xl font-extrabold mb-6">Our Services</h1> */}
        <p className="text-xl mb-4">
          At Uplifting Day Care Center, we are passionate about tailoring our
          services, activities, and staff that uplift the soul, mind, and body
          of our participants. We are dedicated to helping our family members
          rediscover their talents and pursue their passions around the scenic
          beauty of Inglewood.
        </p>
      </div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 z-20">
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

 
  </div>
</div>
</>
  );
};

export default ServicesHero;
