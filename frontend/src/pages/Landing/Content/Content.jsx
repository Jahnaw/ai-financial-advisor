import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="content-text">
        <h2>Financial Clarity for Everyone</h2>
        <p>
          Our AI-powered platform helps students, professionals, and retirees
          make smarter financial decisions without complex jargon.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
        alt="finance"
      />
    </section>
  );
};

export default Content;
