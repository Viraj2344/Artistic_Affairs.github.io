import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function AllProducts() {
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
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Filter />
      <section className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-auto mb-6 lg:mb-10">
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              Our Latest Collection
            </h1>
            <div className={`h-1 w-20 ${mode === 'dark' ? 'bg-pink-600' : 'bg-pink-300'} rounded`}></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <div
                    key={index}
                    className={`p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 ${mode === 'dark' ? 'drop-shadow-xl' : 'drop-shadow-md'} rounded-lg h-170 overflow-hidden`}
                    onClick={() => (window.location.href = `/productinfo/${id}`)}
                  >
                    <div
                      className={`h-full border-2 hover:shadow-lg transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${mode === 'dark' ? 'dark-card' : ''}`}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className="rounded-2xl w-auto h-90 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
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
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllProducts;
