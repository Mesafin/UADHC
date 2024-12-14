export const metadata = {
    title: "Services - Uplifting Adult Day Center",
    description: "Discover the personalized services offered by Uplifting Adult Day Center, including therapeutic care, nursing services, recreational activities, and more.",
    keywords: [
      "adult day care services",
      "therapeutic care",
      "nursing services",
      "senior activities",
      "recreational programs",
      "nutritional meals",
      "senior community",
      "transportation for seniors",
      "wellness programs",
      "Uplifting Adult Day Center"
    ],
    openGraph: {
      title: "Services - Uplifting Adult Day Center",
      description: "Explore our comprehensive services designed to uplift and enrich the lives of seniors.",
      url: "https://uadhc.com/services",
      type: "website",
      images: [
        {
          url: "/medicalServiceImage2.png", 
          width: 1200,
          height: 630,
          alt: "Uplifting Adult Day Center services",
        },
      ],
    },
  };
  
  export default function ServicesLayout({ children }) {
    return <>{children}</>;
  }
  