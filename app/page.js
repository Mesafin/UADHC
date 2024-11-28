import GallerySection from "@/components/GallerySection";
import HeartShapedImage from "@/components/HeartShapedImage";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import HeroSide from "@/components/HeroSide";
import ReviewSlider from "@/components/services/ReviewSlider";
import ServicesSection from "@/components/ServicesSection";
import UpliftingParticipants from "@/components/UpliftingParticipants";

export default function Home() {
  return (
    <>
    <div className=" mx-auto ">
      {/* <h1 className="text-4xl font-bold text-center mt-6">
        Welcome to UpLifting Adult Care
      </h1>
      <p className="text-xl text-center mt-4">
        Our mission is to provide compassionate care to adults in need.
      </p> */}
      {/* <Hero /> */}
      <Hero2 />
      <UpliftingParticipants />
      <ServicesSection />
      <GallerySection />
      <ReviewSlider />
      {/* <HeartShapedImage /> */}
      {/* <div className="text-center mt-6">
        <a href="/services" className="text-blue-500 underline">
          Learn about our services
        </a>
      </div> */}


    </div>
  </>
    );
}
