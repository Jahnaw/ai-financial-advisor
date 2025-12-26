import React, { useEffect, useState } from "react";
import "./Counter.css";

const CounterBox = ({ end, label, suffix = "", desc }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setValue(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="counter-box">
      <h3>
        {value}
        {suffix}
      </h3>
      <p className="counter-label">{label}</p>
      <span className="counter-desc">{desc}</span>
    </div>
  );
};

export default CounterBox;
