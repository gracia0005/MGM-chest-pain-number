import React from "react";
import "../../assets/css/clinic/aboutclinic.css";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "@mui/material/useMediaQuery";

const GastrochestPain = () => {
     const mobile = useMediaQuery("(max-width:991px)");
  return (
    <>
      <section className="aboutclinic gastro" id="About">
        <div className="container">
                  <div className="row">
                       {mobile && (
                                   <div className="common__title__with__line text-center">
                  <h3 className="common__title">
                    Gastrointestinal <span>related Chest Pain</span>
                  </h3>
                  <p className="line m-auto"></p>
                              </div>
                              )}
            <div className="col-lg-6 col-md-12 left-img">
              <StaticImage
                src="../../assets/images/emergency/gastro.png"
                alt="Unemplpoyemt Image"
                placeholder="blurred"
                loading="eager"
                className="about__clinic__logo"
              />
            </div>

            <div className="col-lg-6 col-md-12 ">
                          <div className="about__right__content">
                              {!mobile && (
                                   <div className="common__title__with__line text-center">
                  <h3 className="common__title">
                    Gastrointestinal <span>related Chest Pain</span>
                  </h3>
                  <p className="line"></p>
                              </div>
                              )}
               
                              <ul className="symptoms__list">
                                  <li>Acid reflux, heartburn especially after eating</li>
                                  <li>Swallowing problems related to disorders of the esophagus</li>
                                  <li>Inflammation of the gallbladder or pancreas</li>
                            </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GastrochestPain;
