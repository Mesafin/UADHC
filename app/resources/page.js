import EligibilityEnrollment from "@/components/about/EligibilityEnrollment";
import NewsletterButton from "@/components/NewsletterButton";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceHero from "@/components/resources/ResourceHero";

const page = () => {
  return (
    <>
      <ResourceHero />
      <ResourceCard />
      <div className="container mx-auto mt-4 md:mt-10  flex flex-col items-center">
          <NewsletterButton text="Subscribe to Our Newsletter" style="text-center" />
        </div>
      <EligibilityEnrollment />
    </>
  );
};

export default page;
