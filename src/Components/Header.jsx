import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Products Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/create" ? "active" : ""}`}>
              <Link to="/create" className="nav-link">
                Add Product
              </Link>
            </li>
          </ul>
          <button
            className={`btn btn-${darkMode ? "light" : "dark"} ms-3`}
            onClick={toggleTheme}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;