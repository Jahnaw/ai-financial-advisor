import React from "react";
import { IoArrowForward } from "react-icons/io5";

const OurServicesCard = ({ icon, title }) => {
  return (
    <div className="our-card">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <IoArrowForward />
    </div>
  );
};

export default OurServicesCard;
