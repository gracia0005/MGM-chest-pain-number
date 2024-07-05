import React, { useState } from "react";
import "../../assets/css/diseasebanner.css";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "react-bootstrap";
import { Link, navigate } from "gatsby";
import { useMediaQuery } from "@mui/material";
import BookForm from "./BookForm";

const HealthPackage = ({ reference }) => {
  const [open, setOpen] = useState(false);
  const mb = useMediaQuery("(max-width:600px)");
  return (
    <div id="A-year-With-Varam">
      <section id="diseaseBanner" className="package">
        <section className="main-wrapper web_test">
          <div className="banner-wrapper_web">
            <StaticImage
              className="banner-img"
              src={"../../assets/images/New02.jpg"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
            <StaticImage
              className="mob-banner-img"
              src={"../../assets/images/New-01.jpg"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
            <div className="banner__details">
              <div className="banner-data">
                <h2>Well Women Check Package</h2> 
                <p className="medium__font">
                 For women younger then 40:
                </p>
                <ul>
                  <li>Blood Grouping and Rh Typing</li>
                                  <li>Complete Blood Count Glucose Random</li>
                                  <li>Thyroid Stimulating Hormone (TSH) Urine Routine</li>
                                  <li>Pap Smear</li>
                                  <li>Cervical Smear Ultrasound Abdomen</li>
                                  <li>PHC Consultation (Physician)</li>
                                  <li>PHC Consultation(OBGYN)</li>
                </ul>
                <div className="flexRow">
                  <button
                    className="apply__btn"
                    onClick={() => navigate("#book-now")}
                  >
                    Book  Now
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HealthPackage;
