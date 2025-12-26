import React, { useEffect, useRef, useState } from "react";
import "./Brands.css";

const Brands = () => {
  const brands = [
    "/mmmut.png"
    
  ];

  const bgRef = useRef(null);
  const statRef = useRef(null);
  const [count, setCount] = useState(0);

  /* PARALLAX */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.1}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* COUNT UP */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = 1000;
          const interval = setInterval(() => {
            start += 20;
            setCount(start);
            if (start >= end) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.6 }
    );

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  /* LOGO REVEAL */
  useEffect(() => {
    const logos = document.querySelectorAll(".brand-logo");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.4 }
    );

    logos.forEach((logo) => observer.observe(logo));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="brands">
      {/* BACKGROUND */}
      <div className="brands-bg" ref={bgRef}></div>

      {/* GOLD DIVIDER */}
      <div className="section-divider"></div>

      {/* CONTENT */}
      <div className="brands-content">
        <div className="brands-stat" ref={statRef}>
          <span>{count}+</span>
          <p>MMMUT students exploring smarter finance</p>
        </div>

        <p className="brands-title">
          Trusted by <span>MMMUT students</span> & supported by institutions
        </p>

        <div className="brands-row">
          {brands.map((img, i) => (
            <img key={i} src={img} alt="brand" className="brand-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
