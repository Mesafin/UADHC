export const metadata = {
    title: "Resources - Uplifting Adult Day Center",
    description: "Explore valuable resources for seniors, including links to state agencies, health organizations, and more. Uplifting Adult Day Center provides access to essential information for senior care and support.",
    keywords: [
      "senior resources",
      "California Department of Social Services",
      "California Department of Aging",
      "California Department of Public Health",
      "Medi-Cal resources",
      "Medicare resources",
      "Alzheimer's Association Los Angeles",
      "American Cancer Society resources",
      "health resources for seniors",
      "American Diabetes Association",
      "L.A. Care Health Plan",
      "American Public Health Association",
      "American Heart Association",
      "Uplifting eligibility and enrollment",
      "senior care resources"
    ],
    openGraph: {
      title: "Resources - Uplifting Adult Day Center",
      description: "Discover a range of resources for seniors, including healthcare information, support services, and eligibility guidelines for Uplifting Adult Day Center.",
      url: "https://uadhc.com/resources",
      type: "website",
      images: [
        {
          url: "/pageHero.png", 
          width: 1200,
          height: 630,
          alt: "Senior Resources at Uplifting Adult Day Center",
        },
      ],
    },
  };
  
  export default function ResourcesLayout({ children }) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  