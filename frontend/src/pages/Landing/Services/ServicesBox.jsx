import React from "react";

const ServicesBox = ({ data, onOpen }) => {
  return (
    <div
      className="service-card"
      style={{ backgroundImage: `url(${data.bg})` }}
    >
      <div className="service-card-overlay"></div>

      <div className="service-card-text">
        <h3>{data.title}</h3>

        {/* ONLY SHORT TEXT */}
        <p className="service-short">{data.short}</p>

        {/* CTA BUTTON */}
        <button
          className="service-more"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default ServicesBox;
