// Contact.js

import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-info">
      <div>
        <h4><strong>College Contact Info</strong></h4>
        <p>Gandipet, Hyderabad, Telangana, PIN: 500075</p>
        <p>Phone: 040-24193276</p>
        <p>Mobile: 8466997201</p>
        <p>For Admissions Enquiry: 8466997216</p>
        <p>Email: principal@cbit.ac.in</p>
        <p>Contact Us Academics Admissions NPTEL Placements Swayam Research & Consultancy Online Grievance Recruitment AICTE Feedback</p>
        <p>© 2019 CBIT{' '}
      

      {/* <div className="social-icons"> */}
        
          © 2019 CBIT{' '}
          <a href="https://www.instagram.com/cbithyderabad/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/CBIThyderabad/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.youtube.com/channel/UCUW8oQB8Fl6j-pg2g_sf1tw" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://twitter.com/cbithyd?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
