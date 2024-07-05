import React from "react";
import "../../assets/css/clinic/facilities.css";
import { StaticImage } from "gatsby-plugin-image";
import { RiHeart2Line } from "react-icons/ri";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Specialist = () => {
  const mobile = useMediaQuery("(max-width:991px)");
  return (
    <>
      <section className="specialist white-background" id="Specialists">
        <div className="container">
          <div className="common__title__with__line">
            <h3
              className="common__title text-center
              "
            >
              Our <span>Doctors</span>
            </h3>
            <p className="line m-auto"></p>
          </div>
          <h2 className="common__sub__title text-center  mb-5">
            Cardiology
          </h2>

          {!mobile ? (
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/Narayanan.png"
                    className="specialist__image"
                    alt="Dr Narayanan AL"
                  />
                  <div>
                    <p className="doc__name">Dr Narayanan AL</p>
                    <p className="doc__designation">
                      Senior Consultant Interventional Cardiologist{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/Gopalamurugan.png"
                    className="specialist__image"
                    alt="Dr A B Gopalamurugan"
                  />
                  <div>
                    <p className="doc__name">Dr A B Gopalamurugan</p>
                    <p className="doc__designation">
                      Senior Consultant Interventional Cardiology and
                      Electrophysiology, Director - TAVR and Endovascular
                      Therapy, Director - Electrophysiology and Device Therapy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/madan.png"
                    className="specialist__image"
                    alt="Dr Madan Mohan B"
                  />
                  <div>
                    <p className="doc__name">Dr Madan Mohan B</p>
                    <p className="doc__designation">
                      Senior Consultant Interventional Cardiologist{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/srichandran.png"
                    className="specialist__image"
                    alt="Dr Srichandran L"
                  />
                  <div>
                    <p className="doc__name">Dr Srichandran L</p>
                    <p className="doc__designation">
                      Consultant Interventional Cardiologist
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/srichandran.png"
                    className="specialist__image"
                    alt="Dr Muthusamy Rangasamy"
                  />
                  <div>
                    <p className="doc__name">Dr Muthusamy Rangasamy</p>
                    <p className="doc__designation">
                      Senior Consultant Interventional Cardiologist
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/vivekan.png"
                    className="specialist__image"
                    alt="Dr Vivekan Manoharan"
                  />
                  <div>
                    <p className="doc__name">Dr Vivekan Manoharan</p>
                    <p className="doc__designation">Consultant</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/Ramachandran.png"
                    className="specialist__image"
                    alt="Dr Ramachandran P"
                  />
                  <div>
                    <p className="doc__name">Dr Ramachandran P</p>
                    <p className="doc__designation">Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/Narayanan.png"
                      className="specialist__image"
                      alt="Dr Narayanan AL"
                    />
                    <div>
                      <p className="doc__name">Dr Narayanan AL</p>
                      <p className="doc__designation">
                        Senior Consultant Interventional Cardiologist{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/Gopalamurugan.png"
                      className="specialist__image"
                      alt="Dr A B Gopalamurugan"
                    />
                    <div>
                      <p className="doc__name">Dr A B Gopalamurugan</p>
                      <p className="doc__designation">
                        Senior Consultant Interventional Cardiology and
                        Electrophysiology, Director - TAVR and Endovascular
                        Therapy, Director - Electrophysiology and Device Therapy
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/madan.png"
                      className="specialist__image"
                      alt="Dr Madan Mohan B"
                    />
                    <div>
                      <p className="doc__name">Dr Madan Mohan B</p>
                      <p className="doc__designation">
                        Senior Consultant Interventional Cardiologist{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/srichandran.png"
                      className="specialist__image"
                      alt="Dr Srichandran L"
                    />
                    <div>
                      <p className="doc__name">Dr Srichandran L</p>
                      <p className="doc__designation">
                        Consultant Interventional Cardiologist
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/srichandran.png"
                      className="specialist__image"
                      alt="Dr Muthusamy Rangasamy"
                    />
                    <div>
                      <p className="doc__name">Dr Muthusamy Rangasamy</p>
                      <p className="doc__designation">
                        Senior Consultant Interventional Cardiologist
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/vivekan.png"
                      className="specialist__image"
                      alt="Dr Vivekan Manoharan"
                    />
                    <div>
                      <p className="doc__name">Dr Vivekan Manoharan</p>
                      <p className="doc__designation">Consultant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/Ramachandran.png"
                      className="specialist__image"
                      alt="Dr Ramachandran P"
                    />
                    <div>
                      <p className="doc__name">Dr Ramachandran P</p>
                      <p className="doc__designation">Consultant</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          )}

          <h2 className="common__sub__title text-center  mb-">Cardiac Sciences</h2>
          {!mobile ? (
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/Sanjiv.png"
                    className="specialist__image"
                    alt="Dr. Sanjiv Agrawal"
                  />
                  <div>
                    <p className="doc__name">Dr. Sanjiv Agrawal</p>
                    <p className="doc__designation">
                      Additional Director Cardiology{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/manohar.png"
                    className="specialist__image"
                    alt="Dr. Manohar G"
                  />
                  <div>
                    <p className="doc__name">Dr. Manohar G</p>
                    <p className="doc__designation">Senior Consultant</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="facility__flexRow">
                  <StaticImage
                    src="../../assets/images/emergency/pradeep.png"
                    className="specialist__image"
                    alt="Dr. Pradeep Gopinath Nayar"
                  />
                  <div>
                    <p className="doc__name">Dr. Pradeep Gopinath Nayar</p>
                    <p className="doc__designation">Senior Consultant </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/Sanjiv.png"
                      className="specialist__image"
                      alt="Dr. Sanjiv Agrawal"
                    />
                    <div>
                      <p className="doc__name">Dr. Sanjiv Agrawal</p>
                      <p className="doc__designation">
                        Additional Director Cardiology{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/manohar.png"
                      className="specialist__image"
                      alt="Dr. Manohar G"
                    />
                    <div>
                      <p className="doc__name">Dr. Manohar G</p>
                      <p className="doc__designation">Senior Consultant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/pradeep.png"
                      className="specialist__image"
                      alt="Dr. Pradeep Gopinath Nayar"
                    />
                    <div>
                      <p className="doc__name">Dr. Pradeep Gopinath Nayar</p>
                      <p className="doc__designation">Senior Consultant </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          )}

          
          <div className="row">
            <div className="col-md-6">
              <h2 className="common__sub__title text-center  ">Cardiac Surgery</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/kailash.png"
                      className="specialist__image"
                      alt="Dr. Kailash A Jain"
                    />
                    <div>
                      <p className="doc__name">Dr. Kailash A Jain</p>
                      <p className="doc__designation">
                        Senior Consultant & Clinical Lead
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="facility__flexRow">
                    <StaticImage
                      src="../../assets/images/emergency/ghayore.png"
                      className="specialist__image"
                      alt="Dr. Ghayoor Ahmed"
                    />
                    <div>
                      <p className="doc__name">Dr. Ghayoor Ahmed</p>
                      <p className="doc__designation">Associate Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <h2 className="common__sub__title text-center">Cardiac Anaesthesiology & CT ICU</h2>
                <div className="col-md-12">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/emergency/shapna.png"
                  className="specialist__image"
                  alt="Dr. Shapna Varma"
                />
                <div>
                  <p className="doc__name">Dr. Shapna Varma</p>
                  <p className="doc__designation">Senior Consultant & Clinical Lead</p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialist;
