// src/components/Parallax.js

import React from 'react';
import './parallax.css';

const Parallax = () => {
  return (
    <div className="relative  overflow-hidden">
      <div className="parallax-container">
        <img
          src="./src/assets/Untitled design (25).png"
          alt="Parallax Image"
          className="parallax-image"
        />
      </div>
    </div>
  );
};

export default Parallax;
