    import React from "react";
import "../../assets/css/common.css";

const SurgicalModalities = () => {
  return (
    <section id="CausesOfChestPain" className="Graybackground modalities">
      <div className="container">
        <div className="common__title__with__line text-center">
          <h3 className="common__title">
            Surgical  <span>Modalities</span>
          </h3>
          <p className="line"></p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="causes-list">
              <li>
                <p className="cause-item-title">Percutaneous Coronary Intervention (PCI)</p>
                <p>It is a non-surgical procedure used to treat blockages in a coronary artery.</p>
              </li>
              <li>
                <p className="cause-item-title">Heart Bypass Surgery</p>
                <p>Grafting a healthy artery into your heart tissue in order to bypass a blocked artery.</p>
              </li>
              <li>
                <p className="cause-item-title">Pericarditis</p>
                <p>Removal of accumulated fluids in conditions like pericarditis or pleurisy.</p>
              </li>
            
            </ul>
          </div>
           <div className="col-md-6 ">
            <ul className="causes-list">
              <li>
                <p className="cause-item-title">Catheter-assisted removal of blood clots in the lung.</p>
               
              </li>
              <li>
                <p className="cause-item-title">Removal of gallbladder in people with recurrent gallstones.</p>
            
              </li>
             
             
              
                      </ul>
                      <p className="emg_desc">Evaluation and properly diagnosing your condition determines the course of treatment. Remember that chest pain can be a sign of a more serious condition, it’s important to seek appropriate medical intervention.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SurgicalModalities;
