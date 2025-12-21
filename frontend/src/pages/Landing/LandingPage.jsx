import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";






import { AuthContext } from "../../context/AuthContext";
import "./LandingPage.css";

// landing sub-components
import Hero from "./Hero/Hero";
import Brands from "./Brands/Brands";
import Content from "./Content/Content";
import Services from "./Services/Services";
import OurServices from "./OurServices/OurServices";
import Counter from "./Counter/Counter";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";


const LandingPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) navigate("/dashboard"); // enable later if needed
  }, [user, navigate]);

  return (
    <div className="landing-page">
  

      <main>
        <section className="section hero-section">
          <Hero />
        </section>

        <section className="section">
          <Brands />
        </section>

        <section className="section light-bg">
          <Content />
        </section>

        <section className="section">
          <Services />
        </section>

        <section className="section light-bg">
          <OurServices />
        </section>

        <section className="section">
          <Counter />
        </section>

        <section className="section light-bg">
          <Newsletter />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
