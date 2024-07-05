import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/clinic/testimonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <section className="testimonials" id="Testimonials">
        <h2 className="facility__title text-center">Patient Stories</h2>
        <div className="container">
          <div className="row">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimoial--content">
                  <h3>Sathish Kumar</h3>
                  <p>
                    Hospitalisation is too good, went for emergency labor. The
                    way they treated us at midnight was so good. Couldn't ask
                    better. Dr. Lakshmi mam was very polite and knowledgeable,
                    she is supportive from the beginning of our consultation. We
                    are thankful to her.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimoial--content">
                  <h3>Ms. Mercy Wainaina</h3>
                  <p>
                    Excellent Service. My experience was greatly enhanced by Dr.
                    Kiriti’s exceptional breast oncology expertise and caring
                    approach. The support staff across various departments,
                    including nursing, housekeeping, and the home collection
                    team, were all incredibly helpful and contributed to a
                    comforting and professional environment.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
