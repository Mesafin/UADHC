import AboutUs from "@/components/about/AboutUs";
import Gallery from "@/components/about/Gallery";
import Mission from "@/components/about/Mission";
import Participants from "@/components/about/Participants";
import Staff from "@/components/about/Staff";
import WhyUs from "@/components/about/WhyUs";
import NewsletterButton from "@/components/NewsletterButton";

export default function About() {
    return (
      <>
        <AboutUs />
        <section className="container mx-auto mt-10">
          <NewsletterButton />
        </section>
        <WhyUs />

        <Mission />
        <Participants />
        <Staff />
        <Gallery />
 
      </>
    );
  }
  