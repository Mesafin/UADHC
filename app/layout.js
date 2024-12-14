import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import "./breadcrumb.css";
import "./navbar-style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/layouts/Footer";
import Nav from "@/components/layouts/Nav";
import Navbar from "@/components/layouts/Navbar";
import FooterLogo from "@/components/layouts/FooterLogo";
import BackToTop from "@/components/layouts/BackToTop";
import { layouts } from "chart.js";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UADHC",
  description: "Uplifting Adult Day Center",
  openGraph: {
  url: "https://uadhc.com/",
    type: "website",
    images: [
      {
        url: "/slider-2.png", 
        width: 1200,
        height: 630,
        alt: "Uplifting Adult Day Center image",
        layout: "objectFit"
      },
    ],
  }
};

export default function RootLayout({ children, pageMetadata }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content={pageMetadata?.title || metadata.title} />
        <meta
          name="description"
          content={pageMetadata?.description || metadata.description}
        />
        <meta
          name="keywords"
          content={pageMetadata?.keywords || "default, keywords"}
        />
        <meta
          property="og:title"
          content={pageMetadata?.ogTitle || metadata.title}
        />
        <meta
          property="og:description"
          content={pageMetadata?.ogDescription || metadata.description}
        />
        <meta
          property="og:image"
          content={pageMetadata?.openGraph?.images[0]?.url || "/defaultImage.jpg"}
        />
        <link
          href="https://fonts.cdnfonts.com/css/chunkfive"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon4.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <Navbar />
        {children}
        <FooterLogo />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
