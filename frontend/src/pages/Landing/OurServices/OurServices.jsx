import React from "react";
import OurServicesCard from "./OurServicesCard";
import "./OurServices.css";

const OurServices = () => {
  const data = [
    { title: "Smart Budgeting", icon: "💡" },
    { title: "Investment Guidance", icon: "📈" },
    { title: "Expense Control", icon: "💳" },
    { title: "Goal Tracking", icon: "🎯" },
  ];

  return (
    <section className="our-services">
      <h2>AI-Powered Capabilities</h2>
      <div className="our-grid">
        {data.map((item, i) => (
          <OurServicesCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
