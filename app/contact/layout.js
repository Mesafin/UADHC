export const metadata = {
    title: "Contact Us - Uplifting Adult Day Center",
    description: "Get in touch with Uplifting Adult Day Center for more information or to schedule a tour of our center. We’re here to answer your questions and provide you with the care and support information you need.",
    keywords: [
      "contact Uplifting Adult Day Center",
      "schedule a tour",
      "Inglewood senior care",
      "contact for senior care services",
      "senior care inquiries",
      "Uplifting Adult Day Center contact",
      "senior care questions",
      "schedule tour of senior care center",
      "contact senior care center",
      "Inglewood senior care center contact"
    ],
    openGraph: {
      title: "Contact Us - Uplifting Adult Day Center",
      description: "Reach out to Uplifting Adult Day Center for more information on our services or to schedule a tour. We’re here to help answer any questions you may have.",
      url: "https://uadhc.com/contact",
      type: "website",
      images: [
        {
          url: "//contact-hero.png", 
          width: 1200,
          height: 630,
          alt: "Contact Uplifting Adult Day Center",
        },
      ],
    },
  };
  
  export default function ContactLayout({ children }) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  