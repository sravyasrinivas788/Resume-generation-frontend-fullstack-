import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsRow = () => {
  return (
    <div className="container">
      <div className="buttons-row">
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Home</button>
        <Link to="/hi" style={{ fontWeight: 'bold', fontSize: '18px' }}>
          About
        </Link>
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Rules</button>
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Collection</button>
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Sections</button>
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Membership</button>
        <button style={{ fontWeight: 'bold', fontSize: '18px' }}>Catalogue-OPAC</button>
        <Link to="/contact-us" style={{ fontWeight: 'bold', fontSize: '18px' }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ButtonsRow;