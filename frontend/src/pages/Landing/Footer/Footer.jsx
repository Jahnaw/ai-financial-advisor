import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>AI Financial Advisor</h3>
        <p>
          Smart, simple, and personalized financial guidance powered by AI.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AI Financial Advisor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
