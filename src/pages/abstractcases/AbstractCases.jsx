import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function AbstractCases() {
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


  const constantCategory = "Abstract Cases"; // Set your constant category here

  const Filternew = (productList, category) => {
    return category ? productList.filter((obj) => obj.category.toLowerCase() === category.toLowerCase()) : productList;
  };


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

      <section className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-auto mb-6 lg:mb-10">
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              ABSTRACT CASES
            </h1>
            <div className={`h-1 w-20 ${mode === 'dark' ? 'bg-pink-600' : 'bg-pink-300'} rounded`}></div>
          </div>

          <div className="flex flex-wrap -m-4">
         {Filternew(product, constantCategory).map((item, index) => {
              const { title, price, imageUrl, id, category, discountprice } = item;
                return (
                  <div
                    key={index}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4`}
                    onClick={() => (window.location.href = `/productinfo/${id}`)}
                  >
                    <div
                      className={`h-full border-2 hover:shadow-lg transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 overflow-hidden ${mode === 'dark' ? 'dark-card' : ''}`}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className="w-full h-96 object-cover"
                          src={imageUrl}
                          alt="product"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className={`text-lg font-medium mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {title}
                        </h2>
                        <div className='flex flex-row'>
                        <s className={`text-gray-600 mb-2`}>₹{price}</s>
                        <p className={`text-gray-600 mb-2 ml-2`}>₹{discountprice}</p>
                        </div>
                        <p className={`text-gray-600 mb-2`}>{category}</p>
                        {/* Additional information or actions can be added here */}
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

export default AbstractCases;
