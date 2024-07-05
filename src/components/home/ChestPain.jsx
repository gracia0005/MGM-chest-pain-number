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

export default function ChectPain() {
  const mobile = useMediaQuery("(max-width:991px)");

  return (
    <section id="ChectPain">
      <div className="container">
        <div className="chestPain__content">
           <div className="common__title__with__line text-center">
           <h3 className="common__title text-center">Understanding <span>Chest Pain</span></h3>
             <p className="line m-auto"></p>
       </div>
        <p className="emg_desc text
        ">A chest pain is an emergency condition that impairs the heart’s ability to function correctly and needs urgent medical intervention. Common causes include heart attacks, arrhythmias, and severe chest pain. Recognizing these emergencies and responding promptly can save lives.</p>

        <p className="symptom-title ">Recognizing Symptoms:</p>
        <p className="emg_desc text-center">It’s crucial to recognize the signs of a chest pain/ cardiac emergency.</p>
       </div>

        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="myswiperChestPain"
          >
            <SwiperSlide>
              <div className="symptom-item">
                <StaticImage
                  src="../../assets/images/emergency/severe.png"
                  alt="Unemplpoyemt Image"
                  loading="eager"
                  className="symptom-img"
                />
                <p>Severe chest pain or discomfort</p>
            </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="symptom-item">
                <StaticImage
                  src="../../assets/images/emergency/shortness.png"
                  alt="Unemplpoyemt Image"
                  loading="eager"
                  className="symptom-img"
                />
                <p>Shortness of breath</p>
            </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="symptom-item">
                <StaticImage
                  src="../../assets/images/emergency/lightheade.png"
                  alt="Unemplpoyemt Image"
                  loading="eager"
                  className="symptom-img"
                />
                <p>Lightheadedness or fainting</p>
            </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="symptom-item">
                <StaticImage
                  src="../../assets/images/emergency/rapid.png"
                  alt="Unemplpoyemt Image"
                  loading="eager"
                  className="symptom-img"
                />
                <p>Rapid or irregular heartbeat</p>
            </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="symptom-item">
                <StaticImage
                  src="../../assets/images/emergency/nausea.png"
                  alt="Unemplpoyemt Image"
                  loading="eager"
                  className="symptom-img"
                />
                <p>Nausea or vomiting</p>
            </div>
            </SwiperSlide>
           
          </Swiper>
        </>
      </div>
    </section>
  );
}
