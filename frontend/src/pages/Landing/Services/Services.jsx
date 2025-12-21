import React from "react";
import ServicesBox from "./ServicesBox";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
      title: "Expense Tracking",
      desc: "Automatically categorize spending and visualize where your money goes every month."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
      title: "AI Financial Advisor",
      desc: "Chat with AI to get personalized budgeting, saving, and investment advice."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
      title: "Investment Planning",
      desc: "Discover investment options tailored to your income, age, and risk profile."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      title: "Goal-Based Planning",
      desc: "Set short-term and long-term financial goals and track progress with AI insights."
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>What Our AI Helps You Do</h2>
        <p>
          One intelligent platform to manage expenses, plan investments, and
          make smarter financial decisions.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <ServicesBox
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
