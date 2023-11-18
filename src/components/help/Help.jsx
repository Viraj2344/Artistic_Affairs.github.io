// Add this section to your main component or page
import React from 'react';
import './Help.css'; // Create a CSS file for styling

function HelpSection() {
  return (
    <section className="help-section">
      <div className="help-content">
        <h2>We are here to help you!!</h2>
        <p>
          Check out the most common questions our customers asked. Still have
          questions? <span className="contact-link">Contact us</span>.
        </p>
      </div>
    </section>
  );
}

export default HelpSection;
