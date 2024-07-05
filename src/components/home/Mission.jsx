import React, { useState } from "react";
import "../../assets/css/diseasebanner.css";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "react-bootstrap";
import { Link, navigate } from "gatsby";
import { useMediaQuery } from "@mui/material";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import BookForm from "./BookForm";

const Mission = ({ reference }) => {
  const [open, setOpen] = useState(false);
  const mb = useMediaQuery("(max-width:991px)");
  return (
   
     
           <section id="diseaseBanner" className="package mission">
              <section className="main-wrapper web_test">
                  
          <div className="banner-wrapper_web">
            <StaticImage
              className="banner-img"
              src={"../../assets/images/emergency/mission-banner.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
                  />
                  <StaticImage
              className="mob-banner-img"
              src={"../../assets/images/emergency/mission-mobile.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
           
            <div className="banner__details">
              <div className="banner-data">
                          <div className="common__title__with__line ">
                              <p>MGM Healthcare’s <b>24/7</b> helpline <b>(4200 4200)</b> serves as a crucial resource for the people of Chennai during critical moments.</p>
                  <h3 className="common__title">
                 <span>We are on a mission to save lives, and that will always be our priority.</span>
                  </h3>
                 
                </div>
                 <ul className="header-social-mob">
                    <li>
              <Link  target="_blank" to="https://www.instagram.com/mgmhealthcareindia/">
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
          </div>
        </section>
      </section>

  );
};

export default Mission;
