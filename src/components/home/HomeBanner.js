import React, { useState } from "react";
import "../../assets/css/diseasebanner.css";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from "@mui/material";
import BookForm from "./BookForm";

const HomeBanner = ({ queryData }) => {
  const [open, setOpen] = useState(false);
  const mb = useMediaQuery("(max-width:600px)");
  return (
    <div id="book-now">
      <section id="diseaseBanner">
        <section className="main-wrapper web_test">
          <div className="banner-wrapper_web">
            <StaticImage
              className="banner-img"
              src={"../../assets/images/varam/Baneer2.jpg"}
              alt="Home Banner"
              quality={90}
              objectFit="contain" 
            />
            <StaticImage
              className="mob-banner-img"
              src={"../../assets/images/varam/Banner-1.jpg"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
            />

            <div className="banner__details">
              <div className="banner-data">
                <h2>A Special place for women in the heart of the city</h2>
              </div>
              <BookForm queryData={queryData} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomeBanner;
