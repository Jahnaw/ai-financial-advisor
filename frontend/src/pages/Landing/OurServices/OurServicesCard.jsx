import React from "react";
import "./OurServices.css";

const OurServicesCard = ({ data }) => {
  return (
    <div
      className="our-service-card"
      style={{ backgroundImage: `url(${data.bg})` }}
    >
      <div className="our-service-overlay"></div>

      <div className="our-service-content">
        <h3>{data.title}</h3>
        <p className="our-short">{data.short}</p>
        <p className="our-long">{data.long}</p>

        <span className="our-more">Learn more →</span>
      </div>
    </div>
  );
};

export default OurServicesCard;
