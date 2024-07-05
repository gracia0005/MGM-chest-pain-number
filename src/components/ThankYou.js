import { StaticImage } from "gatsby-plugin-image";
import "../assets/css/thankyou.css";

import React from "react";
import { Link } from "gatsby";

const Thankyou = () => {
  return (
    <>
      <section className="main-wrapper" id="thankyou">
        <div className="thankyou-wrapper">
          <StaticImage
            src="../assets/images/accept.png"
            alt="Right Tick Icon"
            quality={90}
            className="thankyou_img"
          />
          <h2 className="thank-title">Thank You!</h2>
          <p className="thank-message">
            For reaching out to us. Our representative will get in touch with
            you shortly.
          </p>
          <Link to="/" className="back-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};
export default Thankyou;
