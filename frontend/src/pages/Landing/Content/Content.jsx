import React from "react";
import "./Content.css";

const Content = () => {
  const points = [
    {
      title: "Smart Insights",
      desc: "AI-powered analysis that clearly explains your spending habits.",
      bg: "/content1.jpg",
    },
    {
      title: "Student Friendly",
      desc: "Designed especially for MMMUT students and beginners.",
      bg: "/content2.jpg",
    },
    {
      title: "Secure & Private",
      desc: "Your financial data stays encrypted and fully protected.",
      bg: "/content3.jpg",
    },
  ];

  return (
    // Content.jsx
    <section className="content-section" id="about">
      {/* GOLD DIVIDER */}
      <div className="content-divider"></div>

      {/* BACKGROUND */}
      <div className="content-bg"></div>
      <div className="content-overlay"></div>

      {/* GLASS */}
      <div className="content-glass">
        <h2>
          Financial Clarity
          <br />
          <span>Built for Real Life</span>
        </h2>

        <p className="content-desc">
          FinGold simplifies money management using AI — helping students and
          young professionals make confident financial decisions.
        </p>

        <div className="content-points">
          {points.map((item, i) => (
            <div
              key={i}
              className="content-point"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="content-point-overlay"></div>

              <div className="content-point-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
