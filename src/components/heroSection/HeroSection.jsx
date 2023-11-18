import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './herosection.css';

function HeroSection() {
  const images = [
    'https://slickstiles.com/cdn/shop/files/Screenshot_56.png?v=1697109225&width=1800',
    'https://slickstiles.com/cdn/shop/files/harry_potter_mockup_1_b3e64515-985d-4113-ada0-6e54f268e88f.jpg?v=1698595271&width=2400',
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 3000ms or 3s)
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='image' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
