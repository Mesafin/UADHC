"use client";
import React from "react";
import Language from "./Language";

const Nav = () => {
  return (
    <div className="topHeader bg-accent2">
      <div className="container mx-auto p-4 header">
        <ul className="contact-info">
          <li className="contact_list">
            <div className="cta_content">
              <span>
                <i className="fa fa-phone"></i>
                <a href="tel:+1-626-232-1582" className="phone">
                  {" "}
                   +1-213-809-4306{" "}
                </a>
              </span>
            </div>
          </li>

          <li className="contact_list">
            <div className="cta_content">
              <span>
                <i className="fa fa-envelope"></i>{" "}
                <a href="mailto:admin@uadhc.com">admin@uadhc.com</a>
              </span>
            </div>
          </li>
        </ul>

        <div className="lan-social flex flex-col gap-2 md:flex-row">
          <div className="pe-3">
            {/* <LanguageSelector /> */}
            <Language />
          </div>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/uadcla/" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/uadcla/
"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/uadcla/
"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
