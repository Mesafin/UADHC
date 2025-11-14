import Link from "next/link";
import NewsletterButton from "../NewsletterButton";
import { FaUserShield } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-footerBg md:p-10 p-5 pt-20 md:pt-24 font-montserrat  ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:pe-6">
            {/* <h2 className="text-2xl font-bold mb-8">
            Uplifting <span className="text-red-500">Adult</span> Day Center
            </h2> */}
            <p className="mb-10 text-xl">
              Our mission is to enrich seniors' lives through attentive care,
              engaging activities, and the empowerment of a community that
              cultivates dignity and well-being.
            </p>
            <p className="mb-8 font-light text-xl">
              Our vision is to build a community where every senior feels
              belonging, empowered, and celebrated through programs that respect
              cultural heritage and personal needs.
            </p>

     

            <div className="flex gap-4 mb-2 font-light">
              <a
                href="https://www.bing.com/maps/search?ty=18&v=2&sV=1&FORM=MIRE&style=r&q=5757+W+Century+Blvd%2C+Playa+Vista%2C+CA+90045%2C+United+States&ppois=33.946055_-118.382669_5757+W+Century+Blvd%2C+Playa+Vista%2C+CA+90045%2C+United+States_%7E&cp=33.946055%7E-118.382669&lvl=16"
                target="_blank"
                className="flex gap-4 items-start"
              >
                <div className="text-uRed text-4xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="font-light">
                  <strong>
                    5757 W Century Blvd,
                    <br />
                    Los Angeles, CA 90045,
                    <br />
                    United States
                  </strong>
                </p>
              </a>
            </div>

            <div className="flex gap-4 font-light">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-uRed text-white">
                <i className="fas fa-phone"></i>
              </div>{" "}
              <p>213-809-4306</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-8 md:mb-10 tracking-wider">
              Useful Links
            </h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-red-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-red-500">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-red-500">
                  career oportunities
                </a>
              </li>
            </ul>
          </div>

          {/* Reach out */}
          <div className="">
            <h3 className="text-lg font-semibold tracking-wider mb-8 md:mb-10">
              Reach Out to Us
            </h3>
            <p>
              Stay updated on our latest programs, services, and events that
              help seniors thrive in a community designed for their well-being.
            </p>
            <div className="flex flex-col gap-3 mt-6 ">
              <div className="">
                <NewsletterButton text="subscribe" />
              </div>
              <Link href="/contact">
                <button className="my-4 bg-uRed hover:bg-red-500 text-white py-2 px-4 rounded-lg">
                  Contact Us
                </button>
              </Link>
              {/* <Link href="/newsletter">
                <button className="mt-2 bg-uRed hover:bg-red-500 text-white py-2 px-4 rounded">
                  Subscribe to our newsletter
                </button>
              </Link> */}
              <div>
                <ul className="flex flex-row gap-8">
                  <li>
                    <a href="https://www.facebook.com/uadcla/" target="_blank">
                      <i className="fab fa-facebook-f text-2xl hover:text-uRed"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/uadcla/
"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin text-2xl hover:text-uRed"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/uadcla/" target="_blank">
                      <i className="fab fa-instagram text-2xl hover:text-uRed"></i>
                    </a>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
                    <Link href="/login">
                      <FaUserShield className="text-2xl" />
                      {/* <span>Admin</span> */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* All rights reserved */}
        <div className="text-center mt-8">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Uplifting Adult Day Center. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
