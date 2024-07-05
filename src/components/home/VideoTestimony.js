import React, { useRef } from "react";
import "../../assets/css/hometestimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HomeTestimonial({ homeData }) {
  const swiperRef = useRef();

  //console.log("001", homeData);

  return (
    <>
      <section id="home__testimonial">
        <div className="container">
          <div className="testimonial__wrap position-relative">
            <div className="head__section">
              <h3 className="facility__title">Testimonial</h3>
            </div>
            <div className="timeline-navigation-left custom__navigation image-swiper-button-prev">
              <IoIosArrowBack
                onClick={() => swiperRef.current?.slidePrev()}
                size={35}
                className="cursor"
              />
            </div>
            <div className="timeline-navigation-right custom__navigation image-swiper-button-next">
              <IoIosArrowForward
                onClick={() => swiperRef.current?.slideNext()}
                size={35}
                className="cursor"
              />
            </div>
            <Swiper
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              // className="mySwiper"
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              slidesPerView={1}
              className="cursor"
              // style={{
              //   marginLeft: "32px",
              //   marginRight: "32px",
              //   position: "unset",
              // }}
            >
              <div className="slider mt-4" id="testimonial-slider">
                <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                            A Joyful Tale: Mrs. Priya's Gratitude for a Normal
                            Delivery at Varam by MGM Healthcare, Chennai
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>
                              In a heartening tale of joy and appreciation, Mrs.
                              Priya, originally from Faridabad but now residing
                              in Chennai, recently celebrated the arrival of her
                              bundle of joy at Varam by MGM Healthcare. Her
                              experience was made extra special by the
                              remarkable care and expertise provided by Dr
                              Lakshmi Aswathaman Senior Consultant Obstetrics &
                              Gynaecology and the entire hospital team.
                            </p>
                            <p>
                              Mrs. Priya extended her heartfelt thanks to Dr
                              Lakshmi Aswathaman Senior Consultant Obstetrics &
                              Gynaecology , the skilled and compassionate
                              obstetrician who played a crucial role in ensuring
                              a successful normal delivery. The unwavering
                              support and expertise created a positive and
                              empowering birthing experience for Mrs. Priya,
                              showcasing the commitment to maternal well-being
                              that defines Varam by MGM Healthcare , Chennai.
                            </p>
                            {/* <p>
                              Varam at MGM Healthcare in Chennai stands out not
                              only for its modern facilities but also for the
                              compassionate and skilled professionals who form
                              the backbone of the hospital. The collaborative
                              effort of the entire team ensured that Mrs.
                              Priya's childbirth experience was not only safe
                              and secure but also marked by the joy of a normal
                              delivery.
                            </p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/ilyyvsfdfvI?si=QRTC8A6GnttjEhPC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                            Celebrating the arrival of the bundle of joy early at Varam by MGM Healthcare, Chennai
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>
                              Dr Abhinaya & Dr Muthukumaran chose MGM from the
                              initial days of pregnancy. They were in constant
                              observation of Dr A Jaishree Gajaraj, Senior
                              Consultant, Obstetrics and Gynaecology & Dr
                              Niveditha Bharathy, Senior Consultant, Obstetrics
                              and Gynaecology, also as their journey of
                              parenthood wasn’t a smooth ride. Their baby was
                              born in 32 weeks, a premature delivery. Despite
                              premature delivery, both the parents were relieved
                              that their baby was in safe hands. They thanked
                              the entire team of Dr. Jaishree Gajaraj & the NICU team
                              headed by Dr Binu Ninan, Senior Consultant & HOD
                              Paediatrics and Neonatology, for their amazing
                              support and care they received at MGM.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/1nNRI0Kgz6c?si=QtIJyLQMyH3Z_r2I"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                            A Gift to behold for a Lifetime
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>
                              The joy parents feel when they learn they are
                              about to welcome a new member into their family is
                              truly priceless. They are over the moon, thinking
                              and planning about the amazing life that is ahead
                              of them. For new parents Keerthi and Srikanth, the
                              birth of their daughter Aira at Varam by MGM
                              Healthcare has put a smile on their face that is
                              never going to fade away. Listen to them talk with
                              overwhelming happiness about their joy and their
                              experience at Varam under the care of Dr Lakshmi
                              Aswathaman, Senior Obstetrician & Gynaecologist.
                            </p>
                            <p>
                              At Varam by MGM, we endeavour to bring you truly
                              happy memories that will always put a beaming
                              smile on your face. That smile is what drives us
                              in doing more, better.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/VmUhmhWYnoM?si=30lPkxTpgAHN9Ob0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                          Dr Chandini's Unforgettable Pregnancy Journey at Varam by MGM Healthcare
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>
                            Step into the heartwarming tale of Dr. Chandni and Mr. Mukesh as they recount their unforgettable journey at MGM Healthcare during their first pregnancy. With Dr. Jayashree Gajraj and her compassionate team by their side, they discovered a holistic approach to prenatal and postpartum care that surpassed their expectations.
                            </p>
                            <p>At MGM Healthcare, they found more than just medical expertise; they found a nurturing environment where their well-being took center stage. The hospital's rare practice of allowing husbands to be present throughout labor added an extra layer of comfort and support to their experience.</p>
                          
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/oaIApNhZ990?si=OtcV7J-r-pI8mJS5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                          Making your pregnancy journey wholesome -Testament of Pre-Natal Yoga Services at Varam by MGM Healthcare
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>Welcome to the Prenatal Yoga Session at Varam by MGM Healthcare, where we embrace the journey of motherhood with a holistic approach to well-being. Our prenatal yoga program is specifically designed to support and nurture expectant mothers throughout their pregnancy, fostering physical and emotional health.</p>
                            <p>Gentle Asanas (Poses): Explore a series of gentle yoga poses that are safe and beneficial during pregnancy. These poses focus on enhancing flexibility, strength, and circulation while catering to the changing needs of your body.</p>
                            <p>Breathwork (Pranayama): Learn specialized breathing techniques that promote relaxation and reduce stress. Emphasizing the connection between breath and movement, our classes provide a space for you to cultivate mindfulness and a deeper connection with your baby.</p>
                            <p>Pelvic Floor Exercises: Our program includes targeted exercises to strengthen the pelvic floor muscles, offering support for the demands of pregnancy, labor, and postpartum recovery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fsro-5mpCjE?si=6rqUT88YI-Rf9-vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="testimonial--panel ">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 why__desc__wrap">
                        <div className="head__section">
                          <h3 className="sec__title text-white">
                          Welcoming baby Momo: A Heartfelt Journey with Varam by MGM Healthcare
                          </h3>
                          <hr />
                        </div>
                        <div className="why_desc">
                          <div>
                            <p>Meet Mrs. Ramya, Mr. Prasad, and their adorable bundle of joy, Momo! Returning to Varam Healthcare for their second baby, they're grateful for the unwavering support of their trusted team.</p>
                            <p>With their first baby born here two years ago, Varam has become more than just a medical center—it's a sanctuary of care and compassion. From gynecologist to pediatrician, every visit feels like coming home.</p>
                            <p>Special gratitude extends to Dr. Lakshmi Aswathaman, whose expertise guided them through both pregnancies, and their dear friend Dr. Urjita, a pillar of support in their journey.</p>
                            <p>In the embrace of Varam's dedicated team, Mrs.Ramya, Mr. Prasad, and baby Momo find comfort, confidence, and a sense of belonging. Here's to the cherished bonds of family and the joyous milestones ahead!</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="video__panel">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/naZp_2UL2ls?si=20wuo3EtTX4y9i3J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
