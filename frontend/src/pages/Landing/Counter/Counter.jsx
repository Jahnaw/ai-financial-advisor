import React from "react";
import CounterBox from "./CounterBox";
import "./Counter.css";

const Counter = () => {
  const data = [
    { end: 12000, suffix: "+", label: "Active Users" },
    { end: 98, suffix: "%", label: "Accuracy Rate" },
    { end: 50, suffix: "+", label: "AI Insights / Month" },
    { end: 24, suffix: "/7", label: "Smart Monitoring" },
  ];

  return (
    <section className="counter">
      <div className="counter-wrapper">
        {data.map((item, index) => (
          <CounterBox
            key={index}
            end={item.end}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Counter;
