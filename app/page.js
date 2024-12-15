import Hero2 from "@/components/home/Hero2";
import ReviewSlider from "@/components/services/ReviewSlider";
import ServicesSection from "@/components/home/ServicesSection";
import UpliftingParticipants from "@/components/home/UpliftingParticipants";
import NewsletterPage from "./newsletter/page";

export const metadata = {
  title: "Home - Uplifting Adult Day Center",
  description:
    "Welcome to Uplifting Adult Day Center, where care, community, and connection come together to enrich the lives of seniors.",
  keywords: [
    "adult day care",
    "senior care",
    "elderly care services",
    "nutritional meals for seniors",
    "therapeutic care for seniors",
    "engaging activities for seniors",
    "social connection for elderly",
    "professional nursing services",
    "care for aging adults",
    "senior outings and social events",
    "well-being for seniors",
    "supportive environment for seniors",
    "compassionate care for elderly",
    "community for seniors",
    "senior health care",
    "personalized elderly care",
    "holistic care for aging adults",
    "enriching programs for seniors",
    "senior wellness activities",
    "California adult day center",
  ],
  ogTitle: "Uplifting Adult Day Center",
  ogDescription:
    "Uplifting Adult Day Center offers a place where seniors thrive through engaging activities, professional care, and a supportive community.",
  openGraph: {
    title: "Uplifting Adult Day Center",
    description:
      "Join Uplifting Adult Day Center for a community that celebrates seniors through enriching activities, professional care, and social engagement.",
    url: "https://uadhc.com/",
    type: "website",
    images: [
      {
        url: "/slider-4.png",
        width: 1200,
        height: 630,
        alt: "Uplifting Adult Day Center home page image",
        layout: "objectFit",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className=" mx-auto ">
        <Hero2 />
        {/* <NewsletterPage /> */}
        <UpliftingParticipants />
        <ServicesSection />
        <ReviewSlider />
      </div>
    </>
  );
}
