import Breadcrumb from "@/components/layouts/Breadcrumb";
import contact from "../../public/contact-hero.png";
import ContactUs from "@/components/contact/ContactUs";
export default function Contact() {
  return (
    <>
      <Breadcrumb breadcrumbTitle="Contact Us" imageUrl={contact} />
      <ContactUs />
    </>
  );
}
