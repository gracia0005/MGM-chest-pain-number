import React from "react";
import "../../assets/css/common.css";
import { StaticImage } from "gatsby-plugin-image";

const Diagnostic = () => {
  return (
    <section
      id="ProfessionalHelp"
      className="risk__factor white-background"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 padding-right">
            <div className="common__title__with__line">
              <h3 className="common__title">
                Diagnostic <span>Tests</span>
              </h3>
              <p className="line"></p>
            </div>
            <ul className="symptoms__list">
                          <li>An ECG or EKG, which records your heart’s electrical activity</li>
                          <li>A chest X-ray, which used to examine your heart, lungs and blood vessels</li>
                          <li>An echocardiogram, which uses sound waves to record images of your heart</li>
                          <li>MRI used to evaluate anatomy and function of the heart chambers</li>
                          <li>An angiogram is used to assess blockages in specific arteries.</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 padding-left">
            <div className="common__title__with__line">
              <h3 className="common__title">
                <span>Treatment</span>
              </h3>
              <p className="line"></p>
                      </div>
                      <p className="emg_desc pb-3">Medications can be used to treat many different types of chest pain.</p>
                     
            <ul className="symptoms__list">
              <li> NSAIDs: To reduce inflammation and ease pain. </li>
              <li>
               Beta-blockers: To relieve chest pain and lower blood pressure
              </li>
              <li>ACE-inhibitors: To lower blood pressure</li>
              <li>
               Nitroglycerin: Aids in relaxation and widen blood vessels
              </li>
              <li>Blood Thinners: Reduces the formation of blood clots.</li>
              <li>Statins: To lower blood cholesterol levels</li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
