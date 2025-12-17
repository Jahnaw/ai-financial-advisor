import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    income: "",
  });

  const { signup } = useContext(AuthContext);
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      nav("/home");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="login-screen">
      <div className="fingold-logo">FinGold</div>
      <div className="login-glass-card slide-in">
        {/* TOGGLE */}
        <div className="auth-toggle">
          <button type="button" onClick={() => nav("/login")}>
            Sign in
          </button>
          <button className="active" type="button">
            Sign up
          </button>
        </div>

        <h2 className="login-title">Create an account</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={submit}>
          <input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            placeholder="Enter your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <input
            placeholder="Age"
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <input
            placeholder="Monthly income"
            type="number"
            value={form.income}
            onChange={(e) => setForm({ ...form, income: e.target.value })}
          />

          <button type="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
}
