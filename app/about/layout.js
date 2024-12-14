export const metadata = {
    title: "About Us - Uplifting Adult Day Center",
    description: "Learn about Uplifting Adult Day Center, where we provide affordable, community-focused senior care, holistic support, and enriching activities for seniors in Inglewood.",
    keywords: [
      "Uplifting Adult Day Center",
      "senior care services",
      "adult day care in Inglewood",
      "affordable senior programs",
      "community-focused senior care",
      "personalized senior care",
      "holistic senior care",
      "senior support services",
      "vibrant senior community",
      "empowering seniors",
      "senior engagement",
      "well-being for seniors",
      "cultural heritage in senior care",
      "South Los Angeles senior care center"
    ],
    openGraph: {
      title: "About Us - Uplifting Adult Day Center",
      description: "Uplifting Adult Day Center empowers seniors through care, respect, and holistic support. Explore our community-focused programs and enriching activities.",
      url: "https://uadhc.com/about-us",
      type: "website",
      images: [
        {
          url: "/about.png", 
          width: 1200,
          height: 630,
          alt: "Uplifting Adult Day Center About Us",
        },
      ],
    },
  };
  
  export default function AboutUsLayout({ children }) {
    return <>{children}</>;
  }
  