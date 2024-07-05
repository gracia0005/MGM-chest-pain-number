import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "../../assets/css/common.css"

const TopHeader = () => {
  return (
    <section className="top-header">
      <div className="container">
        <div className="top-header-content">
          <StaticImage
            src="../../assets/images/emergency/logo.png"
            className="main__logo"
            quality={90}
            alt="MGM Healthcare - Chennai"
          />
          <StaticImage
            src="../../assets/images/emergency/emergency-num.png"
            className="brand__logo"
            quality={90}
            alt="MGM Healthcare - Chennai"
          />
          <ul className="top-header-social">
            <li>
              <Link target="_blank" to="https://www.instagram.com/mgmhealthcareindia/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.facebook.com/MGMHealthcareIN">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.linkedin.com/company/mgm-healthcare-india/"> 
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
