import React from "react";
import "../assets/css/common.css";

const CausesOfChestPain = () => {
  return (
    <section id="CausesOfChestPain" className="Graybackground">
      <div className="container">
        <div className="common__title__with__line text-center">
          <h3 className="common__title text-center">
            Lung-related <span>causes of Chest Pain</span>
          </h3>
          <p className="line m-auto"></p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="causes-list">
              <li>
                <p className="cause-item-title">Pulmonary Embolism (PE)</p>
                <p>Sudden, sharp pain, shortness of breath, coughing up blood.</p>
              </li>
              <li>
                <p className="cause-item-title">Pneumonia</p>
                <p>Pain with coughing or breathing, fever, shortness of breath.</p>
              </li>
              <li>
                <p className="cause-item-title">Pleuritis (Pleurisy)</p>
                <p>Sharp pain worsened by breathing, coughing, or sneezing.</p>
              </li>
              <li>
                <p className="cause-item-title">Pneumothorax (Collapsed Lung)</p>
                <p>Sudden, sharp pain, shortness of breath.</p>
              </li>
              <li>
                <p className="cause-item-title">Pulmonary Hypertension</p>
                <p>Chest pain, shortness of breath, dizziness.</p>
              </li>
              
            </ul>
          </div>
           <div className="col-md-4 ">
            <ul className="causes-list">
              <li>
                <p className="cause-item-title">Lung Cancer</p>
                <p>Persistent pain, cough with blood, shortness of breath.</p>
              </li>
              <li>
                <p className="cause-item-title">Asthma</p>
                <p>Chest tightness, shortness of breath, wheezing.</p>
              </li>
              <li>
                <p className="cause-item-title">Chronic Obstructive Pulmonary Disease (COPD)</p>
                <p>Persistent discomfort, chronic cough with mucus.</p>
              </li>
              <li>
                <p className="cause-item-title">Tuberculosis (TB)</p>
                <p>Chest pain, persistent cough with blood, fever.</p>
              </li>
             
              
            </ul>
          </div>
           <div className="col-md-4">
            <ul className="causes-list">
              <li>
                <p className="cause-item-title">Pulmonary Edema</p>
                <p>Severe shortness of breath, wheezing, frothy sputum.</p>
              </li>
              <li>
                <p className="cause-item-title">Bronchitis</p>
                <p>Chest discomfort, persistent cough, mucus production.</p>
              </li>
              <li>
                <p className="cause-item-title">Interstitial Lung Disease</p>
                <p>Chronic dry cough, chest discomfort.</p>
              </li>
              <li>
                <p className="cause-item-title">Pulmonary Fibrosis</p>
                <p>Chronic dry cough, chest discomfort, weight loss.</p>
              </li>
             
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesOfChestPain;
