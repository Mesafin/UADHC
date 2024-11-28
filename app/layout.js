import localFont from "next/font/local";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import "./breadcrumb.css";
import "./navbar-style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";
import FooterLogo from "@/components/FooterLogo";

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
  description: "Uplifting Adult Day Care Center",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.cdnfonts.com/css/chunkfive" rel="stylesheet" />
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />  
        <link rel="icon" type="image/png" href="/favicon3.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <Navbar />
        {children}
        <FooterLogo />
        <Footer />
      </body>
    </html>
  );
}
