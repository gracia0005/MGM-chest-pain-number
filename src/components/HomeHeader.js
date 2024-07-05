import React from "react";
import "../assets/css/header.css";
import { StaticImage } from "gatsby-plugin-image";
import { navigate, Link } from "gatsby";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";

const HomeHeader = () => {
  const mobile = useMediaQuery("(max-width:991px)");
  return (
    <div className="stickyContainer">
      {/* <div className="stickyContainer"> */}
      <nav className="navbar">
        <div className="header__section">
          <div
            className="navbar-brand"
            // style={{ cursor: "pointer" }}
          >
            {mobile && (
              <div className="logo__section">
                <div
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  <StaticImage
                    className="mlogo1"
                    objectFit="contain"
                    quality={100}
                    alt="MGM Healthcare - Chennai"
                    src={"../assets/images/emergency/logo.png"}
                  />
                </div>
              </div>
            )}

            <div className="nav__detailsContainer">
              <div
                className="d-flex align-items-center justify-content-between nav__items"
                style={{ gap: "30px" }}
              >
                <div className="nav-item nav-icons-web">
                  <Link
                    to="#"
                    className="nav-link  header_link"
                    aria-current="page"
                    activeClassName=""
                  >
                    Home
                  </Link>
                </div>
                <div className="nav-item nav-icons-web">
                  <Link
                    to="#"
                    className="nav-link  header_link"
                    aria-current="page"
                    activeClassName=""
                  >
                    About Us
                  </Link>
                </div>
                <div className="nav-item nav-icons-web">
                  <Link
                    to="#"
                    className="nav-link  header_link"
                    aria-current="page"
                    activeClassName=""
                  >
                    Types of Emergency
                  </Link>
                </div>
                <div className="nav-item nav-icons-web">
                  <Link
                    to="#"
                    className="nav-link  header_link"
                    aria-current="page"
                    activeClassName=""
                  >
                    Your Medical Emergency Kit
                  </Link>
                </div>

                <div className="nav-item nav-icons-web">
                  <Link
                    to="#"
                    className="nav-link  header_link"
                    aria-current="page"
                    activeClassName=""
                  >
                    Contact
                  </Link>
                </div>

                {mobile && (
                  <ul className="header-social-mob">
                    <li>
              <Link  target="_blank" to="https://www.instagram.com/mgmhealthcareindia/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.facebook.com/MGMHealthcareIN">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.linkedin.com/company/mgm-healthcare-india/"> 
                <FaLinkedinIn />
              </Link>
            </li>
                  </ul>
                )}

                <button
                  className="navbar-toggler burger__menu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <IoMdMenu
                    color="#26386c"
                    size={35}
                    className="burger__menu"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link "
                  aria-current="page"
                  activeClassName="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link "
                  aria-current="page"
                  activeClassName="active"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link "
                  aria-current="page"
                  activeClassName="active"
                >
                  Types of Emergency
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link "
                  aria-current="page"
                  activeClassName="active"
                >
                  Your Medical Emergency Kit
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link "
                  aria-current="page"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default HomeHeader;
