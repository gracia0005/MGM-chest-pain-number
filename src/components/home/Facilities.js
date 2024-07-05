import React from "react";
import "../../assets/css/clinic/facilities.css";
import { StaticImage } from "gatsby-plugin-image";

const Facilities = () => {
  return (
    <>
      <section className="facilities" id="Facilities">
        <div className="container">
          <h1 className="facility__title">Facilities</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/varam/Icon-1.png"
                  className="facility__icon"
                  alt="Dedicated operation theatre"
                />
                <p>Dedicated operation theatre</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/varam/Icon-5.png"
                  className="facility__icon"
                  alt="Ambulatory foetal heart rate monitoring"
                />
                <p>Ambulatory foetal heart rate monitoring</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/varam/Icon-2.png"
                  className="facility__icon"
                  alt="High Dependency Unit"
                />
                <p>High Dependency Unit</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/varam/Icon-4.png"
                  className="facility__icon"
                  alt="State-of-the-art Level-III Neonatal ICU"
                />
                <p>State-of-the-art Level-III Neonatal ICU</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="facility__flexRow">
                <StaticImage
                  src="../../assets/images/varam/Icon-3.png"
                  className="facility__icon"
                  alt="Transport Incubator"
                />
                <p>Transport Incubator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
