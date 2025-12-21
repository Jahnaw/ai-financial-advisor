import React from "react";
import "./Services.css";

const ServicesBox = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesBox;
