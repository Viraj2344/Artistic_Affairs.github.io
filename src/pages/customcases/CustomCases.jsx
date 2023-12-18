import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

// Sample product array
const customCasesProducts = [
  {
    id: 1,
    title: 'Wallet Card',
    price: 250.99,
    imageUrl: 'https://instagram.fnag4-1.fna.fbcdn.net/v/t39.30808-6/391610786_17978124047578311_121509455696016605_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fnag4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jf-xVOto9IEAX8CEhpQ&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIxMTkzMjgxMzE1NjkzMDQzNQ%3D%3D.2-ccb7-5&oh=00_AfA7E5W3RPWZNRJ0TQ_XXVqbzN_dvi2PXKsssWFaQxMqMw&oe=6583D4BC&_nc_sid=b41fef',
    link: 'https://www.instagram.com/p/CyTE-KtIR5F/?img_index=1',
  },
  {
    id: 2,
    title: 'Temperature Bottles',
    price: 399.99,
    imageUrl: 'https://instagram.fnag4-1.fna.fbcdn.net/v/t39.30808-6/371878108_17972309339578311_3519510129698495544_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fnag4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fgrXGWsPk40AX9TlN7b&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE4MTQ5Mzk0NzkxNjg2NjE3Mw%3D%3D.2-ccb7-5&oh=00_AfA3N8i7g7VfAv4l1tp6b5KAd_bfn5YbRbGzIfll2pELvw&oe=6583746A&_nc_sid=b41fef',
    link: 'https://www.instagram.com/p/Cwm7-Oso9J9/',
  },
  // Add more products as needed
];

function CustomCases() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-auto mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              CUSTOM CASES
            </h1>
            <div className="h-1 w-20 bg-pink-300 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {customCasesProducts.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                onClick={() => (window.location.href = item.link)}
              >
                <div className="h-full border-2 hover:shadow-lg transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 overflow-hidden">
                  <div className="flex justify-center cursor-pointer">
                    <img
                      className="w-full h-96 object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-medium mb-2 text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-2">₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CustomCases;
