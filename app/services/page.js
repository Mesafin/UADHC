"use client";
import BottomShape from "@/components/services/BottomShape";
import MedicalServices from "@/components/services/MedicalServices";
import Nourishing from "@/components/services/Nourshing";
import Outlings from "@/components/services/Outlings";
import PsychologicalSupport from "@/components/services/PsychologicalSupport";
import ReviewSlider from "@/components/services/ReviewSlider";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceVideo from "@/components/services/ServiceVideo";
import Shapes from "@/components/services/Shapes";
import SideImageSection from "@/components/services/SideImageSection";
import TherapyGrid from "@/components/services/TherapyGrid";
import Thriving from "@/components/services/Thriving";
import TransportSection from "@/components/services/TransportSection";
import Wellness from "@/components/services/Wellness";
import { useRef } from "react";

export default function Services() {
  // Refs for each service section
  const nursing = useRef(null);
  const therapy = useRef(null);
  const outlings = useRef(null);
  const recreational = useRef(null);
  const nourshing = useRef(null);

  const scrollToSection = (sectionRef) => {
    const offset = 80; 
    if (sectionRef.current) {
      const elementPosition = sectionRef.current.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <>
      <ServicesHero
        onServiceClick={scrollToSection}
        sectionRefs={{ nursing, therapy, outlings, recreational, nourshing }}
      />
      <ServiceVideo />
      <div ref={nursing} >
        <MedicalServices />
      </div>
      <Shapes />
      <div className="bg-[#BB3535] font-montserrat" ref={therapy}>
        <SideImageSection
          imageSrc="/therapyImage.png"
          title="Therapeutic Care"
          subtitle="We believe in the power of therapy to enhance the lives of our participants. Our comprehensive therapeutic care program is designed to build independence, improve communication, and strengthen physical abilities. "
          points={[
            "Personalized assessments: Tailored evaluations to identify specific needs and goals.",
            "Customized treatment plans: Developing individualized therapy programs to address identified challenges.",
            "Ongoing evaluation: Regular monitoring of progress and adjustments to treatment plans as needed.",
          ]}
        />

        <TherapyGrid />
      </div>
      <BottomShape />
      <div className="container mx-auto">
        <PsychologicalSupport />
      </div>
      <div ref={outlings}>
        <Outlings />
      </div>
      <div className="container mx-auto">
        <TransportSection />
      </div>
      <div ref={recreational}>
        <Wellness />
      </div>
      <Thriving />
      <div ref={nourshing}>
        <Nourishing />
      </div>
      <ReviewSlider />
    </>
  );
}
