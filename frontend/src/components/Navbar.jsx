import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const onLogout = () => {
    logout();
    nav("/");
  };

  const userInitial = user?.name?.charAt(0).toUpperCase();

  return (
    <header className="nav">
      {/* LEFT: LOGO */}
      <div className="nav-left">
        <Link to="/home" className="fingold-logo nav-brand">
          FinGold
        </Link>
      </div>

      {/* CENTER: NAV LINKS */}
      <div className="nav-center">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/ai-advisor" className="nav-link">AI Advisor</Link>
        <Link to="/investments" className="nav-link">Investments</Link>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="nav-right">
        <button onClick={onLogout} className="nav-logout">
          Logout
        </button>

        {user && (
          <div className="nav-avatar">
            {userInitial}
          </div>
        )}
      </div>
    </header>
  );
}
