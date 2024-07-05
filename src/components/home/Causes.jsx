import React, { useState } from "react";
import "../../assets/css/diseasebanner.css";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "react-bootstrap";
import { Link, navigate } from "gatsby";
import { useMediaQuery } from "@mui/material";
import BookForm from "./BookForm";

const Causes = ({ reference }) => {
  const [open, setOpen] = useState(false);
  const mb = useMediaQuery("(max-width:991px)");
  return (
   
        !mb ? (
           <section id="diseaseBanner" className="package">
              <section className="main-wrapper web_test">
                  
          <div className="banner-wrapper_web">
            <StaticImage
              className="banner-img"
              src={"../../assets/images/emergency/cause-banner.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
           
            <div className="banner__details">
              <div className="banner-data">
                <div className="common__title__with__line ">
                  <h3 className="common__title">
                    Heart-related <span>causes of chest pain</span>
                  </h3>
                  <p className="line "></p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <ul>
                      <li>
                        <p className="cause-item-title">Heart attack</p>
                        <p>Blockage of blood flow to the heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Pericarditis</p>
                        <p>Inflammation of the sac around your heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Cardiomyopathy</p>
                        <p>Disease of the heart muscle</p>
                      </li>
                      <li>
                        <p className="cause-item-title">
                          Coronary Artery Spasm
                        </p>
                        <p>Temporary narrowing of the coronary arteries.</p>
                      </li>
                    </ul>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                    <ul>
                      <li>
                        <p className="cause-item-title">Angina</p>
                        <p>Chest pain caused by blockages in the blood vessels leading to your heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Myocarditis</p>
                        <p>Inflammation of the heart muscle</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Aortic Dissection</p>
                        <p>Rare condition involving tear of the aorta</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    ) :
 <section id="diseaseBanner" className="package">
              <section className="main-wrapper web_test">
                  
                  <div className="banner-wrapper_web">
                       <div className="banner__details">
              <div className="banner-data">
                <div className="common__title__with__line ">
                  <h3 className="common__title">
                    Heart-related <span>causes of chest pain</span>
                  </h3>
                  <p className="line "></p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <ul>
                      <li>
                        <p className="cause-item-title">Heart attack</p>
                        <p>Blockage of blood flow to the heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Pericarditis</p>
                        <p>Inflammation of the sac around your heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Cardiomyopathy</p>
                        <p>Disease of the heart muscle</p>
                      </li>
                      <li>
                        <p className="cause-item-title">
                          Coronary Artery Spasm
                        </p>
                        <p>Temporary narrowing of the coronary arteries.</p>
                      </li>
                    </ul>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                    <ul>
                      <li>
                        <p className="cause-item-title">Angina</p>
                        <p>Chest pain caused by blockages in the blood vessels leading to your heart</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Myocarditis</p>
                        <p>Inflammation of the heart muscle</p>
                      </li>
                      <li>
                        <p className="cause-item-title">Aortic Dissection</p>
                        <p>Rare condition involving tear of the aorta</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
            <StaticImage
              className="mob-banner-img"
              src={"../../assets/images/emergency/cause-banner-mob.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
           
          </div>
        </section>
      </section>    

     
   
  );
};

export default Causes;
