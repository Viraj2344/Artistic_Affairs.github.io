import React from 'react';
import './parallax.css'; // Create a CSS file for styling

function Parallax({ imageUrl }) {
  return (
    <section className="single-image-container">
      <div className="image-wrapper">
    
        <img
          className="centered-imag custom-cursor "
          src={'https://coveritup.com/cdn/shop/files/phone-interface-glass-case.jpg?v=1701368791&width=1600'}
          alt="Centered Image"
        />
      </div>
    </section>
  );
}

export default Parallax;
