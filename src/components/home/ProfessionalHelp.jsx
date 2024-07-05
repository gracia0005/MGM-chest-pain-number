import React from "react";
import "../../assets/css/common.css";
import { StaticImage } from "gatsby-plugin-image";

const ProfessionalHelp = () => {
  return (
    <section id="ProfessionalHelp" className="Graybackground">
          <div className="container">
               <div className="common__title__with__line text-center">
        <h3 className="common__title text-center">
          When to Seek<span> Professional Help</span>
        </h3>
        <p className="line m-auto"></p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="professional__left__content">
                          <p className="common__sub__title">Do not wait to see if symptoms improve.</p>
                          <p className="call__for__help">Call for professional help if you notice</p>
                          <ul className="symptoms__list">
                              <li>Persistent chest pain</li>
                              <li>Difficulty breathing</li>
                              <li>Fainting or loss of consciousness</li>
                              <li>Rapid or irregular heartbeat</li>
                          </ul>
                </div>
                </div>
                  <div className="col-lg-6 col-md-12">
                      <p className="emg_desc">Our Specialized Cardiac Services At MGM Healthcare, we offer comprehensive cardiac emergency services. Our team of senior cardiologists, neurologists, neurosurgeons, emergency specialists and ambulance service network, along with partner clinics across the city, are ready to provide the best care.</p>
                      <p className="symptom-title">We are committed to relieving Chennai of chest pain, one call at a time.</p>
                  <StaticImage
                    src="../../assets/images/emergency/24-call.png"
                    alt="Rapid or irregular heartbeat"
                    loading="eager"
                    className="professional__clinic__logo"
                  />
                </div>
              </div>
     </div>
          
    </section>
  );
};

export default ProfessionalHelp;
