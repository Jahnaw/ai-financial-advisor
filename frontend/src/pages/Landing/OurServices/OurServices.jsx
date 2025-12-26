import React from "react";
import OurServicesCard from "./OurServicesCard";
import "./OurServices.css";

const OurServices = () => {
  const services = [
    {
      title: "Smart Budgeting",
      short: "Plan spending intelligently.",
      long: "AI analyzes income and expenses to help you budget smarter every month.",
      bg: "/ourS1.jpg",
    },
    {
      title: "Investment Guidance",
      short: "Invest with confidence.",
      long: "Get AI-driven insights into mutual funds, stocks, and savings options.",
      bg: "/ourS2.jpg",
    },
    {
      title: "Expense Control",
      short: "Control unnecessary spending.",
      long: "Track expenses in real time and get alerts when spending exceeds limits.",
      bg: "/ourS3.jpg",
    },
    {
      title: "Goal Tracking",
      short: "Achieve financial goals.",
      long: "Set savings goals and monitor progress with visual insights.",
      bg: "/ourS5.jpg",
    },
  ];

  return (
    <section className="our-services">
      {/* GOLD LINE */}
      <div className="our-services-divider"></div>

      {/* BACKGROUND */}
      <div className="our-services-bg"></div>
      <div className="our-services-overlay"></div>

      {/* HEADER */}
      <div className="our-services-header">
        <h2>
          Powerful <span>AI Capabilities</span>
        </h2>
        <p>
          Everything you need to manage money smarter — designed for clarity,
          control, and long-term growth.
        </p>
      </div>

      {/* GRID */}
      <div className="our-services-grid">
        {services.map((item, index) => (
          <OurServicesCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
