import React from "react";
import "../assets/css/footer.css";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { RiStackshareLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <section id="footer">
      <div className="footer__container">
       <p className="copyright text-center">© Copyright 2019 All Reserved BY MGM HEALTHCARE .</p>
      </div>
    </section>
  );
};

export default Footer;
