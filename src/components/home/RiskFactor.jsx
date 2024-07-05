import React from "react";
import "../../assets/css/common.css";
import { StaticImage } from "gatsby-plugin-image";

const RiskFactor = () => {
  return (
    <section
      id="ProfessionalHelp"
      className="risk__factor Graybackground"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="common__title__with__line">
              <h3 className="common__title">
                Major <span>Risk factors</span>
              </h3>
              <p className="line"></p>
            </div>
            <ul className="symptoms__list">
              <li>Smoking</li>
              <li>High Blood Pressure</li>
              <li>High Cholesterol</li>
              <li>Diabetes</li>
              <li>Inactive lifestyle</li>
              <li>Stress</li>
            </ul>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="common__title__with__line">
              <h3 className="common__title">
                Common Signs <span>and Symptoms</span>
              </h3>
              <p className="line"></p>
            </div>
            <ul className="symptoms__list">
              <li>Shortness of breath</li>
              <li>
                Chest discomfort or pain (may extend to arms, neck, jaw, or
                between shoulder blades)
              </li>
              <li>Indigestion, heartburn, or gas-like pain</li>
              <li>
                Fatigue (may be unexplained or accompanied by sleep
                disturbances)
              </li>
              <li>Nausea</li>
              <li>Sweating</li>
              <li>Dizziness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFactor;
