import GallerySection from "@/components/GallerySection";
import Hero2 from "@/components/Hero2";
import ReviewSlider from "@/components/services/ReviewSlider";
import ServicesSection from "@/components/ServicesSection";
import UpliftingParticipants from "@/components/UpliftingParticipants";

export default function Home() {
  return (
    <>
    <div className=" mx-auto ">
  
      <Hero2 />
      <UpliftingParticipants />
      <ServicesSection />
      <GallerySection />
      <ReviewSlider />



    </div>
  </>
    );
}
