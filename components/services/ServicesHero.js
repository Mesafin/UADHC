import { FaClinicMedical, FaHouseUser, FaRunning, FaUserNurse, FaUtensils } from "react-icons/fa";
import ServiceCard from "../ServiceCard";

const ServicesHero = ({ onServiceClick, sectionRefs }) => {
  const services = [
    { id: 1, icon: <FaUserNurse size={40} />, title: "Nursing Services", ref: sectionRefs.nursing },
    { id: 2, icon: <FaClinicMedical size={40} />, title: "Therapeutic Care", ref: sectionRefs.therapy },
    { id: 3, icon: <FaRunning size={40} />, title: "Outings", ref: sectionRefs.outlings },
    { id: 4, icon: <FaHouseUser size={40} />, title: "Recreational Activities", ref: sectionRefs.recreational },
    { id: 5, icon: <FaUtensils size={40} />, title: "Nutritional Meals", ref: sectionRefs.nourshing },
  ];

  return (
    <div className="py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-uRed mb-4 mx-auto text-center">
          Click on the Service Cards to Learn More
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 z-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              onClick={() => onServiceClick(service.ref)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;