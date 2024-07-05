import React from "react";
import "../../assets/css/common.css";
import { StaticImage } from "gatsby-plugin-image";

const SalientFeatures = () => {
  return (
    <section id="ProfessionalHelp" className="salient__features white-background">
      <div className="container">
        <div className="common__title__with__line text-center">
          <h3 className="common__title text-center">
           Our <span>Salient features</span>
          </h3>
          <p className="line m-auto"></p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
             <ul className="symptoms__list">
                          <li>Emergency phone calls answered within 5 seconds</li>
                          <li>Senior Cardiologists are available 24/7</li>
                          <li>Specialized emergency response team is available round the clock</li>
                          <li>Comprehensive Level 1 Coronary Care Unit and CT ICU</li>
                          <li>Monoplane catheterization laboratory for cardiological interventions</li>
              </ul>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul className="symptoms__list">
                          <li>State of the art cardiac operation theatre with latest ECMO and IABP machines</li>
                          <li>State-of-the-art 128 slice CT machine to perform image-guided PCIs.</li>
                          <li>State-of-the-art Radiology and Imaging Services with 3 Tesla MRI CT</li>
                          <li>Bi-planar Cath labs for complex Neuro and Cardiac interventions.</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalientFeatures;
