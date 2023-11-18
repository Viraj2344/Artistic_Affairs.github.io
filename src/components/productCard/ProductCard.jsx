import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import './Productcard.css';

function ProductCard() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardWidth = 360; // Adjust the card width as needed

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const displayNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const displayPreviousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + product.length) % product.length
    );
  };

  const cardsPerPage = window.innerWidth <= 768 ? 1 : 4;
  const repeatedProduct = [...product, ...product];
  const cardItems = repeatedProduct.slice(
    currentCardIndex,
    currentCardIndex + cardsPerPage
  );

  const circleSize = 60; // Adjust the circle size as needed

  return (
    <section
      className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
      style={{ backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff' }}
    >
      <div className="container px-5 py-8 md:py-16 mx-auto relative">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            Our Latest Collection
          </h1>
          <div className={`h-1 w-20 ${mode === 'dark' ? 'bg-pink-600' : 'bg-pink-300'} rounded`}></div>
        </div>

        <div className="relative">
          <div className="block overflow-hidden">
            <button
              onClick={displayPreviousCard}
              className={`absolute inset-y-1/2 left-0 z-10 p-2 bg-gray-800/40 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100 text-white rounded-full shadow-md`}
              style={{ width: `${circleSize}px`, height: `${circleSize}px`, transform: 'translateY(-50%)' }}
            >
              &lt;
            </button>

            <div className="flex">
              {cardItems.map((item, index) => {
                const { title, price, description, imageUrl, id } = item;
                return (
                  <div
                    key={index}
                    className={`w-${100 / cardsPerPage}% p-4`}
                  >
                    <div
                      onClick={() => (window.location.href = `/productinfo/${id}`)}
                      className="flex justify-center cursor-pointer"
                    >
                      <img
                        className="rounded-2xl w-full p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className={`tracking-widest text-xs title-font font-medium mb-1 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        Artistic Affairs
                      </h2>
                      <h1
                        className={`title-font text-lg font-medium mb-3 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                      >
                        {title}
                      </h1>
                      <p
                        className={`leading-relaxed mb-3 ${mode === 'dark' ? 'text-white' : 'text-gray-600'}`}
                      >
                        ₹{price}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => addCart(item)}
                          className={`focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2`}
                        >
                          Add To Cart
                        </button>
                      </div>
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

export default ProductCard;
