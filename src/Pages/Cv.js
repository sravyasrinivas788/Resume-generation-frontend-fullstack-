// Resume.js

import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaUpload } from "react-icons/fa";

import "./Cv.css"; // Create this CSS file for styling

const Cv = () => {
  return (
    <div className="resume-container">
      <div className="quote">
        <p>"Your resume is not a document. It's a journey of your professional life."</p>
      </div>
      <div className="buttons-container">
        <Link to="/login" className="resume-button">
          <FaFileAlt /> Create Your Resume
        </Link>
        <button className="resume-button">
          <FaUpload /> Upload Resume
        </button>
      </div>
    </div>
  );
};

export default Cv;
