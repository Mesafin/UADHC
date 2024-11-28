import Breadcrumb from "@/components/Breadcrumb";
import contact from "../../public/contact-hero.png"
import ContactUs from "@/components/ContactUs";
export default function Contact() {
    return (
      <>
      <Breadcrumb breadcrumbTitle="Contact Us" imageUrl={contact}/>
      <ContactUs />
    
      </>
    );
  }
  