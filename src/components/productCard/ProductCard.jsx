import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import './ProductCard.css';

function ProductSquareCarousel() {
  const context = useContext(myContext);
  const { mode } = context;

  const carouselItems = [
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000',
      text: 'All Collections',
      link: '/allproducts',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000',
      text: 'Saree Cases',
      link: '/sareecases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000',
      text: 'Cyberpunk',
      link: '/cyberpunkcases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000',
      text: 'Abstract Case',
      link: '/abstractcases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000',
      text: 'Travel Case',
      link: '/travelcases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000',
      text: 'Hippie Trippie Case',
      link: '/hippietrippiecases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000',
      text: 'Anime Cases',
      link: '/animecases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000',
      text: 'Cricket Cases',
      link: '/cricketcases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000',
      text: 'Football Cases',
      link: '/footballcases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000',
      text: 'Music Cases',
      link: '/musiccases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000',
      text: 'Cars/Bikes Case',
      link: '/carsbikescases',
    },
    {
      image: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000',
      text: 'Gaming Cases',
      link: '/gamingcases',
    },
  ];
  

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const displayNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const displayPreviousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const cardsPerPage = window.innerWidth <= 768 ? 1 : 3;
  const repeatedItems = [...carouselItems, ...carouselItems];
  const cardItems = repeatedItems.slice(
    currentCardIndex,
    currentCardIndex + cardsPerPage
  );

  const circleSize = 60; // Adjust the circle size as needed

  return (
    <section
    className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
    style={{ backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff' }}
  >
    <div className="container  py-8 md:py-16 mx-auto relative">
      <div className="relative">
        <div className="block overflow-hidden">
          <button
            onClick={displayPreviousCard}
            className={`absolute inset-y-1/2 left-0 z-10  bg-gray-800/40 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100 text-white rounded-full shadow-md`}
            style={{ width: `${circleSize}px`, height: `${circleSize}px`, transform: 'translateY(-50%)' }}
          >
            &lt;
          </button>

          <div className="flex">
            {cardItems.map((item, index) => {
              const { image, text, link } = item;
              return (
                <div
                  key={index}
                  className={`w-${100 / cardsPerPage}% p-4 product-square-card`}
                >
                  <div
                    onClick={() => (window.location.href = link)}
                    className="flex justify-center cursor-pointer product-square-image"
                  >
                    <img
                      className=" w-full p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                      src={image}
                      alt={text}
                    />
                    <p className={`text-sm ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={displayNextCard}
            className={`absolute inset-y-1/2 right-0 z-10 p-2 bg-gray-800/40 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100 text-white rounded-full shadow-md`}
            style={{ width: `${circleSize}px`, height: `${circleSize}px`, transform: 'translateY(-50%)' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ProductSquareCarousel;
