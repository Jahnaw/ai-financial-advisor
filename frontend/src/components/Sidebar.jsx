import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  LayoutDashboard,
  Wallet,
  Target,
  BarChart3,
  Sparkles,
  TrendingUp,
  User
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          <LayoutDashboard size={18} />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/dashboard?tab=expenses"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          <Wallet size={18} />
          <span>Expenses</span>
        </NavLink>

        <NavLink
          to="/dashboard?tab=goals"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          <Target size={18} />
          <span>Goals</span>
        </NavLink>

        <NavLink
          to="/dashboard?tab=reports"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          <BarChart3 size={18} />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/ai-advisor" className="side-link">
          <Sparkles size={18} />
          <span>AI Advisor</span>
        </NavLink>

        <NavLink to="/investments" className="side-link">
          <TrendingUp size={18} />
          <span>Investments</span>
        </NavLink>

        <NavLink to="/profile" className="side-link">
          <User size={18} />
          <span>Profile</span>
        </NavLink>

      </nav>
    </aside>
  );
}
