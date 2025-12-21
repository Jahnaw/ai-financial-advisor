import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./Hero.css";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const lastScrollY = useRef(0);
  const [hideHeader, setHideHeader] = useState(false);

  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Pricing", url: "/pricing" },
    { text: "Blog", url: "/blog" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current && scrollY > 120) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-wrapper">
      {/* ================= HEADER ================= */}
      <header className={`landing-header ${hideHeader ? "hide" : ""}`}>
        <div className="landing-header-inner">
          <div className="brand-name" onClick={() => navigate("/")}>
            FinGold
          </div>

          <nav className="desktop-menu">
            <ul>
              {menuItems.map((item, i) => (
                <li key={i}>
                  <NavLink to={item.url}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {!user && (
            <div className="auth-buttons">
              <button className="btn-login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="btn-signup" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= HERO ================= */}
      
      <div className="hero">
        {/* BACKGROUND IMAGE */}
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>

        {/* CENTERED CONTENT */}
        <div className="hero-container">
          <div className="hero-glass-card">
            <span className="hero-tag">AI-POWERED FINANCE</span>

            <h1 className="hero-title">
              Smarter Financial
              <br />
              <span>Decisions with AI</span>
            </h1>

            <p className="hero-desc">
              Track expenses, analyse spending patterns, and get intelligent
              insights to grow your wealth — all in one secure platform.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">How It Works</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
