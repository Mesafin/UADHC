import EligibilityEnrollment from "@/components/about/EligibilityEnrollment";
import NewsletterButton from "@/components/NewsletterButton";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceHero from "@/components/resources/ResourceHero";

const page = () => {
  return (
    <>
      <ResourceHero />
      <ResourceCard />
      <NewsletterButton />
      <EligibilityEnrollment />
    </>
  );
};

export default page;
