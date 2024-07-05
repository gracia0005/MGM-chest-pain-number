import React, { useState } from "react";
import "../../assets/css/diseasebanner.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";
import { useMediaQuery } from "@mui/material";

const Banner = ({ reference }) => {
  const [open, setOpen] = useState(false);
  const mb = useMediaQuery("(max-width:600px)");
  return (
    <div id="Home" style={{marginTop:"0px"}}>
      {!mb ? (
         <StaticImage
              className="banner-img"
              src={"../../assets/images/emergency/banner.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
      ): 
    
            <StaticImage
              className="mob-banner-img"
              src={"../../assets/images/emergency/banner-mob.png"}
              alt="Home Banner"
              quality={90}
              objectFit="contain"
              placeholder="blurred"
              loading="eager"
            />
     }
    </div>
  );
};

export default Banner;
