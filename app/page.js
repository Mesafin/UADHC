import Hero2 from "@/components/home/Hero2";
import ReviewSlider from "@/components/services/ReviewSlider";
import ServicesSection from "@/components/home/ServicesSection";
import UpliftingParticipants from "@/components/home/UpliftingParticipants";

export default function Home() {
  return (
    <>
      <div className=" mx-auto ">
        <Hero2 />
        <UpliftingParticipants />
        <ServicesSection />
        <ReviewSlider />
      </div>
    </>
  );
}
