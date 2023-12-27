// Updated JSX code

import React from "react";
import { Link } from "react-router-dom";
import "./Navbars.css"; // Import the CSS file

const Navbars = () => {
  return (
    <div className="fixed-navbar">
      <nav>
        <div className="logo" style={{width:"20%"}}>
          <Link to="/">
            <img
              src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
              alt="Library Logo"
            />
          </Link>
        </div>
        <div className="matter">
          <h1 style={{ color: "#a16b15", fontSize: "18px" }} className="heading">
            
            <br />
            (An UGC Autonomous. UGC-NAAC, AICTE-NBA, ISO Accredited Institute)
            <br />
            Gandipet, Hyderabad - 500 075. Telangana, India
          </h1>
        </div>
        <div className="nav-buttons">
          <Link
            to="/login"
            className="login-button"
          >
            Student Login
          </Link>
          <Link
            to="/place"
            className="login-button"
          >
            Placement-cell
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
