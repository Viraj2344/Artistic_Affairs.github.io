// SingleImage.js

import React from 'react';
import './SingleImage.css';

function SingleImage({ imageUrl }) {
  return (
    <section className="single-image-container">
      <div className="image-wrapper  bg-gradient-to-r from-gray-700 to-gray-900		  ">
        <img
          className="centered-image    custom-cursor" // Add the custom-cursor class here
          src={'https://i.pcmag.com/imagery/roundups/02DKurhNaRKOu8dw06YsCln-1..v1695339502.jpg'}
          alt="Centered Image"
        />
      </div>
    </section>
  );
}

export default SingleImage;
