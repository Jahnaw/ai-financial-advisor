import React from "react";
import "./Process.css";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Data",
      desc: "Securely add income, expenses, and goals to let AI understand your financial profile.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
      step: "02",
      title: "AI Analysis",
      desc: "Our AI analyzes spending patterns, risks, and opportunities in real time.",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    },
    {
      step: "03",
      title: "Personalized Advice",
      desc: "Get tailored suggestions for budgeting, saving, and investing.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor progress, adjust goals, and grow wealth with continuous AI insights.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
  ];

  return (
    <section className="process">
      <div className="process-header">
        <h2>How It Works</h2>
        <p>
          A simple four-step journey to smarter financial decisions powered by AI.
        </p>
      </div>

      <div className="process-flow">
        {steps.map((item, index) => (
          <div className="process-step" key={index}>
            <div className="step-visual">
              <span className="step-number">{item.step}</span>
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
