import React from 'react';
import './SingleImage.css'; // Create a CSS file for styling

function SingleImage({ imageUrl }) {
  return (
    <section className="single-image-container">
      <div className="image-wrapper">
      <h1 className="centered-text">{'Introducing Different Styles Of Case Designs'}</h1>
        <img
          className="centered-image"
          src={'https://i.pcmag.com/imagery/roundups/02DKurhNaRKOu8dw06YsCln-1..v1695339502.jpg'}
          alt="Centered Image"
        />
      </div>
    </section>
  );
}

export default SingleImage;
