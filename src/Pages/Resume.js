/* Resume.js */

import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import "./resume.css";
import Navbars from './Navbars'; // Adjust the path based on your project structure
import Buttonss from './Buttonss';

const Resume = () => {
  return (
    <div>
      <Navbars />
      <Buttonss />





      <div className="resume-container">



        {/* <div className="quote">
          <p>"Your resume is no t a document. It's a journey of your professional life."</p>
        </div> */}

        <div className="info-container">
          <div className="info-block">
            <h2> Resume</h2>
            <p>
              The resume is a crucial document that highlights your professional experience, skills, and achievements.
              It provides a snapshot of your career and helps recruiters understand your qualifications quickly.
              Used when applying for a position in industry, non-profit, and public sector
              Is no longer than 2 pages, with an additional page for publications and/or poster presentations if highly relevant to the job
              After 1 year of industry experience, lead with work experience and place education section at the or near the end, depending upon qualifications
            </p>
          </div>

          <div className="info-block">
            <h2>CV</h2>
            <p>
              The Curriculum Vitae (CV) is a comprehensive document that includes detailed information about your
              academic and professional background. It is often used in academic and research settings.
              Emphasizes academic accomplishments
              used when applying for positions in academia, fellowships and grants
              Length depends upon experience and includes a complete list of publications, posters, and presentations
              Always begins with education and can include name of advisor and dissertation title or summary (see examples). Also used for merit/tenure review and sabbatical leave
            </p>
          </div>
        </div>

        <div className="buttons-container">
          <Link to="/login" className="resume-button">
            <FaFileAlt /> Create Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
