import React from "react";
import "./Brands.css";

const Brands = () => {
  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  ];

  return (
    <section className="brands">
      <p>Trusted by forward-thinking companies</p>
      <div className="brands-row">
        {brands.map((img, i) => (
          <img key={i} src={img} alt="brand" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
