export const metadata = {
    title: "Career Opportunities - Uplifting Adult Day Center",
    description: "Make a difference in the lives of seniors by joining the Uplifting Adult Day Center team. Explore career opportunities and become part of our compassionate team providing exceptional care and support.",
    keywords: [
      "career opportunities",
      "join our team",
      "senior care jobs",
      "compassionate care staff",
      "employment at Uplifting Adult Day Center",
      "caregiver jobs",
      "senior care careers",
      "Inglewood senior care jobs",
      "Uplifting Adult Day Center jobs",
      "healthcare employment"
    ],
    openGraph: {
      title: "Career Opportunities - Uplifting Adult Day Center",
      description: "Join the Uplifting Adult Day Center team and make a difference in the lives of seniors. Explore our career opportunities and contribute to their well-being.",
      url: "https://uadhc.com/career",
      type: "website",
      images: [
        {
          url: "/career.png", 
          width: 1200,
          height: 630,
          alt: "Career Opportunities at Uplifting Adult Day Center",
        },
      ],
    },
  };
  
  export default function CareerLayout({ children }) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  