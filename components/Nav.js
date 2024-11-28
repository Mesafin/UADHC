'use client'
import React from 'react';
import Language from './Language';

const Nav = () => {
  return (
    <div className="topHeader">
      <div className="container mx-auto p-4 header">
        <ul className="contact-info">
          <li className="contact_list">
            {/* <div className="cta_icon">
                          <p>Call us</p>
                    </div>    */}
            <div className="cta_content">
              <span>
                <i className="fa fa-phone"></i>
                <a href="tel:+1-626-232-1582" className="phone">
                  {" "}
                  +1-626-232-1582{" "}
                </a>
              </span>
            </div>
          </li>

          <li className="contact_list">
            {/* <div className="cta_icon">
                      <p>Email Us</p>
                    </div> */}

            <div className="cta_content">
              <span>
                <i className="fa fa-envelope"></i>
{" "}
                <a href="mailto:filimon@uadhc.com">support@uadhc.com</a>
              </span>
            </div>
          </li>

        </ul>

        <div className="lan-social flex flex-col gap-2 md:flex-row">
          <div className='pe-3'>
            {/* <LanguageSelector /> */}
            <Language />
          </div>

        <ul className="social-links">

          <li>
        {/*  https://www.facebook.com/profile.php?id=61556155242196 */}
            <a
              href="#"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>

          {/* <li>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>  */}
          <li>
           {/* href="https://twitter.com/i/flow/login?redirect_after_login=%2FJACOME2695" */ }
            <a
            
              href="#"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>

        {/*  <li>
            <a href="https://www.instagram.com/jacome8316/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li> */}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

