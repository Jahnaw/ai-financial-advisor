import React, { useEffect, useState } from "react";
import ServicesBox from "./ServicesBox";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
  {
    title: "Expense Tracking",
    short: "Automatically track where your money goes.",
    long: "AI categorizes your expenses, detects patterns, and helps you reduce unnecessary spending.",
    extraLong:
      "With intelligent expense tracking, every transaction is automatically analyzed and categorized in real time, giving you a clear picture of your spending habits. The system highlights unnecessary expenses, identifies recurring costs, and provides actionable insights to help you save more efficiently. Over time, this creates better financial awareness, encourages disciplined spending, and empowers you to take full control of your money without manual effort.",
    bg: "/service1.jpg",
  },
  {
    title: "AI Financial Advisor",
    short: "Smart guidance using AI.",
    long: "Ask AI for budgeting, saving, and investment advice tailored to your lifestyle.",
    extraLong:
      "The AI Financial Advisor acts as your personal money mentor, analyzing your income, expenses, goals, and risk profile to provide personalized recommendations. Whether you want to build a budget, plan monthly savings, or understand investment opportunities, the AI adapts its guidance to your lifestyle and financial behavior, helping you make confident and informed decisions at every stage of your journey.",
    bg: "/service3.jpg",
  },
  {
    title: "Investment Planning",
    short: "Plan investments confidently.",
    long: "AI suggests investment paths based on goals, risk tolerance, and timelines.",
    extraLong:
      "Investment planning becomes simple and strategic with AI-driven insights that align with your financial goals and time horizon. The system evaluates risk tolerance, market trends, and future objectives to recommend balanced investment paths. This helps you grow wealth steadily, reduce uncertainty, and build long-term financial security with confidence rather than guesswork.",
    bg: "/service4.jpg",
  },
  {
    title: "Goal-Based Planning",
    short: "Achieve goals step by step.",
    long: "Track progress toward savings, education, travel, and lifestyle goals.",
    extraLong:
      "Goal-based planning allows you to break big dreams into achievable milestones, whether it’s saving for education, planning travel, or improving your lifestyle. By continuously tracking progress and aligning daily financial decisions with long-term aspirations, the system keeps you motivated, highlights progress visually, and helps you adjust strategies when needed—ensuring steady growth toward a balanced and fulfilling future.",
    bg: "/service5.jpg",
  },
];


  /* SCROLL-IN */
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      {/* GOLD LINE */}
      <div className="services-divider"></div>

      {/* BACKGROUND */}
      <div className="services-bg"></div>
      <div className="services-overlay"></div>

      {/* HEADER */}
      <div className="services-header">
        <h2>
          Smart <span>Services</span> for Financial Growth
        </h2>
        <p>
          Everything you need to manage money — powered by AI and built for
          students.
        </p>
      </div>

      {/* GRID */}
      <div className="services-grid">
        {servicesData.map((item, i) => (
          <ServicesBox
            key={i}
            data={item}
            onOpen={() => setActiveService(item)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <button>Explore all features</button>
      </div>

      {/* MODAL */}
      {activeService && (
        <div className="service-modal" onClick={() => setActiveService(null)}>
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveService(null)}
            >
              🔐
              {/* close button */}
            </button>

            {/* long paragraph */}
            <h3>{activeService.title}</h3>
            <p>{activeService.extraLong}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
