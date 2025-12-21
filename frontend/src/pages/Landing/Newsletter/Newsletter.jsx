import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-box">
        <h2>Stay Ahead of Your Finances</h2>
        <p>
          Get AI-powered financial tips, insights, and updates directly in your
          inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
