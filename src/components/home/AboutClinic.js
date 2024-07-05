import React from "react";
import "../../assets/css/clinic/aboutclinic.css";
import { StaticImage } from "gatsby-plugin-image";

const AboutClinic = () => {
  return (
    <>
      <section className="aboutclinic" id="About">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-6 col-md-12 ">
              <div className="about__right__content">
                <p className="emg_sub__title">MGM Healthcare Chennai offers</p>
                <h3 className="emg__title">24x7 emergency cardiac care.</h3>
                <p className="line"></p>
                <p className="emg_title__desc">Expert team, Level 1 Trauma Centre, immediate response.</p>
                <p className="emg_desc">
                When every second counts, MGM Healthcare provides immediate, life-saving care for cardiac emergencies. Our expert team is dedicated to offering the fastest and most effective treatment to ensure the best outcomes for our patients. We offer a Level 1 Trauma Centre in the heart of Chennai, ensuring 24/7 access to senior consultants and super-specialists. We understand the importance of building trust during critical moments and are dedicated to upholding essential principles in emergency care.
                </p>
                <p className="bottom_emg_desc">For immediate assistance, call MGM Healthcare’s Chennai <b>Chest Pain Number</b> at <b>4200 4200</b>. Our round-the-clock <b>helpline is available 24/7</b> to address chest pain and heart-related emergencies.</p>
              </div>
            </div>
             <div className="col-lg-6 col-md-12 left-img">
              <StaticImage
                src="../../assets/images/emergency/about.png"
                alt="Unemplpoyemt Image"
                placeholder="blurred"
                loading="eager"
                className="about__clinic__logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutClinic;
