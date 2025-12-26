import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getExpenses } from "../../api/expenseApi";
import { getGoals } from "../../api/goalApi";
import HealthScoreCard from "../../components/HealthScoreCard";
import { calculateHealthScore, calculateStats } from "../../utils/calculateStats";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import RecentTransactions from "./RecentTransactions";
import BalanceChart from "./BalanceChart";
import "./HomePage.css";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getExpenses({ limit: 10 });
        setExpenses(res.data?.data || []);
        const g = await getGoals();
        setGoals(g.data || []);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loader />;

  const stats = calculateStats(expenses, user?.income);
  const score = calculateHealthScore(stats);

  const statusText =
    score >= 70
      ? "Your financial health is stable and improving."
      : score >= 40
      ? "Your finances need attention. Monitor spending."
      : "High risk detected. Immediate action recommended.";

  return (
  
    <div className="home">

      {/* ================= HERO SUMMARY ================= */}
      <div className="hero-card">
        <div className="hero-left">
          <p className="hero-greet">Welcome back,</p>
          <h1>{user?.name}</h1>
          <p className="hero-status">{statusText}</p>

          <div className="hero-balance">
            <span>Total Balance</span>
            <strong>₹{stats.savings - stats.totalExpenses}</strong>
          </div>

          <div className="hero-actions">
            <Link to="/ai-advisor" className="btn-primary">
              Ask AI Advisor
            </Link>
            <Link to="/dashboard" className="btn-secondary">
              View Dashboard
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <HealthScoreCard score={score} stats={stats} />
        </div>
      </div>

      {/* ================= INSIGHT STRIP ================= */}
      <div className="insight-strip">
        <div>
          <span>Savings</span>
          <strong>₹{stats.savings}</strong>
        </div>
        <div>
          <span>Expenses</span>
          <strong>₹{stats.totalExpenses}</strong>
        </div>
        <div>
          <span>Active Goals</span>
          <strong>{goals.length}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong className={score >= 70 ? "good" : "alert"}>
            {score >= 70 ? "Healthy" : "At Risk"}
          </strong>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="home-grid">

        {/* LEFT COLUMN */}
        <div className="left-column">

          {/* AI INSIGHT */}
          <div className="card glass">
            <h3>AI Insight</h3>
            <p className="muted">
              You could save more this month by reducing discretionary expenses.
            </p>
            <Link to="/ai-advisor" className="link-arrow">
              Get detailed advice →
            </Link>
          </div>

          {/* TRANSACTIONS */}
          <div className="card glass">
            <RecentTransactions expenses={expenses} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">

          {/* BALANCE TREND */}
          <div className="card balance-card">
            <div className="card-head">
              <h4>Balance Trend</h4>
              <span className="muted">Last 7 days</span>
            </div>

            <BalanceChart
              data={[
                { name: "Mon", value: 1200 },
                { name: "Tue", value: 900 },
                { name: "Wed", value: 1400 },
                { name: "Thu", value: 800 },
                { name: "Fri", value: 1100 },
              ]}
            />
          </div>

          {/* QUICK STATS */}
          <div className="quick-stats">
            <div>
              <span>Income</span>
              <strong>₹{user?.income ?? 0}</strong>
            </div>
            <div>
              <span>Expenses</span>
              <strong>₹{stats.totalExpenses}</strong>
            </div>
            <div className="highlight">
              <span>Savings</span>
              <strong>₹{stats.savings}</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
