// Button.js

import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaCalendar, FaUserTie } from "react-icons/fa";

import "./Buttonss.css";

const Buttonss = () => {
  return (
    <div className="navbar" style={{ backgroundColor: "#385728" }}>
      <Link to="/HomePages" className="nav-link">
        <FaHome /> Home
      </Link>
      <Link to="/Resume" className="nav-link">
        <FaFileAlt /> Resume
      </Link>
      <Link to="/attendance" className="nav-link">
        <FaCalendar /> Attendance
      </Link>
      <Link to="/inter" className="nav-link">
        <FaUserTie /> Interview Experience
      </Link>
    </div>
  );
};

export default Buttonss;
