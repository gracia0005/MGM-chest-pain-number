import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../assets/css/doctorvideo.css";
import { StaticImage } from "gatsby-plugin-image";

export default function ImmediateAction() {
  const mobile = useMediaQuery("(max-width:991px)");

  return (
    <section id="ChectPain" className="immediateAction">
      <div className="container">
        <div className="chestPain__content">
          <div className="common__title__with__line text-center">
            <h3 className="common__title text-center">
              <span>Immediate Actions to Take</span>
            </h3>
            <p className="common__sub__title">
              If you suspect someone is experiencing a cardiac emergency:
            </p>
            <p className="line m-auto"></p>
          </div>
          <p
            className="emg_desc text
        "
          >
            Our infographic provides a step-by-step guide to performing CPR:
          </p>
        </div>

        <div className="row max-row">
          <div className="col-lg-4 col-md-6 col-12 pb-2">
            <div className="symptom-item">
              <StaticImage
                src="../../assets/images/emergency/call.png"
                alt="Unemplpoyemt Image"
                loading="eager"
                className="symptom-img"
              />
              <p>Call emergency services immediately.</p>
            </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pb-2">
            <div className="symptom-item">
              <StaticImage
                src="../../assets/images/emergency/cpr.png"
                alt="Unemplpoyemt Image"
                loading="eager"
                className="symptom-img"
              />
              <p>Perform CPR if the person is unresponsive and not breathing.</p>
            </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pb-2">
            <div className="symptom-item">
              <StaticImage
                src="../../assets/images/emergency/calm.png"
                alt="Unemplpoyemt Image"
                loading="eager"
                className="symptom-img"
              />
              <p>Keep the person calm and comfortable until help arrives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
