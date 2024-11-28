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

export default function Services() {
    return (
      <>
        <ServicesHero />
        <ServiceVideo />
        <MedicalServices />
        <ReviewSlider />
        <Shapes />
        <div className="bg-[#BB3535] font-montserrat">
          
       
        <SideImageSection
        imageSrc="/therapyImage.png" 
        title="Therapeutic Care"
        subtitle="At Uplifting Adult Day Center, we believe in the power of therapy to enhance the lives of our participants. Our comprehensive therapeutic care program is designed to build independence, improve communication, and strengthen physical abilities. "
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
        <TransportSection />
        </div>
        <Wellness />
        <Outlings />
        <Nourishing />
        <Thriving />
      </>
    );
  }
  