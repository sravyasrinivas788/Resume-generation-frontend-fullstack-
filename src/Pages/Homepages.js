// Homepages.js

import React from "react";
import Navbars from "./Navbars"; // Adjust the path based on your project structure
import Buttonss from "./Buttonss"; 
import img from "./cbit.jpeg"
import './Homepages.css';
import Contact from "./Contact";

const Homepages = () => {
  return (
    <div>
      <Navbars />
      <Buttonss />
      {/* Add the rest of your homepage content here */}
      
      <div className="img-container">
      <img  className="img"src={img} height={"350px"} vertical-align={"middle"}></img>
      </div>
      <div className="contact-container">
        <Contact/>
      </div>
      
        
   
   
    </div>
    
  );
};

export default Homepages;
