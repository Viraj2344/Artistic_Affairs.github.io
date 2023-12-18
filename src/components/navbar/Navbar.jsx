import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

function CollectionsDropdown({ collections, mode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='group relative'>
      <button
        className='block p-4 font-medium text-gray-900 cursor-pointer'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{ color: mode === 'dark' ? 'white' : '' }}
      >
        Collections
      </button>
      <div
        className={`${
          dropdownOpen ? 'block' : 'hidden'
        } absolute top-full left-0 bg-white rounded-md p-4 shadow-md lg:w-56`}
        style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}
      >
        {collections.map((collection) => (
          <Link
            key={collection.name}
            to={collection.link}
            className='block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100'
            style={{ color: mode === 'dark' ? 'white' : '' }}
          >
            {collection.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  const cartItems = useSelector((state) => state.cart);

  const collections = [
    { name: 'All Collections', link: '/allproducts' },
    { name: 'Saree Cases', link: '/sareecases' },
    { name: 'Cyberpunk', link: '/cyberpunkcases' },
    { name: 'Abstract Case', link: '/abstractcases' },
    { name: 'Travel Case', link: '/travelcases' },
    { name: 'Hippie Trippie Case', link: '/hippietrippiecases' },
    { name: 'Anime Cases', link: '/animecases' },
    { name: 'Cricket Cases', link: '/cricketcases' },
    { name: 'Football Cases', link: '/footballcases' },
    { name: 'Music Cases', link: '/musiccases' },
    { name: 'Cars/Bikes Case', link: '/carsbikescases' },
    { name: 'Gaming Cases', link: '/gamingcases' },
  ];

  return (
    <div className={`bg-white sticky top-0 z-50 ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-white bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel
                className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className='flex px-4 pb-2 pt-28'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <Link to={'/allproducts'} className='text-sm font-medium text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    All Products
                  </Link>

                  <CollectionsDropdown collections={collections} mode={mode} />

                  {user ? (
                    <div className='flow-root'>
                      <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '' }} className='-m-2 block p-2 font-medium text-gray-900'>
                        Order
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}

                  {user?.user?.email === 'virajbakshi083@gmail.com' ? (
                    <div className='flow-root'>
                      <Link to={'/dashboard'} className='-m-2 block p-2 font-medium text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}

                  {user ? (
                    <div className='flow-root'>
                      <a onClick={logout} className='-m-2 block p-2 font-medium text-gray-900 cursor-pointer' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className='flow-root'>
                      <Link to={'/signup'} className='-m-2 block p-2 font-medium text-gray-900 cursor-pointer' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Signup
                      </Link>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className={`relative ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'} border-b border-gray-200`}>
        <nav aria-label='Top' className={`px-4 sm:px-6 lg:px-8 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          <div className='flex h-16 items-center justify-between'>
            <button
              type='button'
              className='rounded-md bg-white p-2 text-gray-400 lg:hidden'
              onClick={() => setOpen(true)}
              style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <span className='sr-only'>Open menu</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>

            <div className='flex items-center'>
              <Link to={'/'} className='flex'>
                <div className='flex'>
                  <h1 className='text-2xl font-bold px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Artistic Affairs
                  </h1>
                </div>
              </Link>
            </div>

            <div className='flex items-center'>
              <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6'>
                <Link to={'/allproducts'} className='text-sm font-medium flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <span className='mx-2'>All Products</span>
                </Link>

                <CollectionsDropdown collections={collections} mode={mode} />
                <Link to={'/customcases'} className='text-sm font-medium flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <span className='mx-2'>Custom Products</span>
                </Link>
                {user ? (
                  <Link to={'/order'} className='text-sm font-medium flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2'>Order</span>
                  </Link>
                ) : (
                  <Link to={'/signup'} className='text-sm font-medium flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2'>Signup</span>
                  </Link>
                )}

                {user?.user?.email === 'virajbakshi083@gmail.com' ? (
                  <Link to={'/dashboard'} className='text-sm font-medium flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2'>Admin</span>
                  </Link>
                ) : (
                  ''
                )}

                {user ? (
                  <a onClick={logout} className='text-sm font-medium cursor-pointer flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2'>Logout</span>
                  </a>
                ) : (
                  <Link to={'/signup'} className='text-sm font-medium cursor-pointer flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2'>Signup</span>
                  </Link>
                )}
              </div>

              <div className='ml-auto flow-root lg:ml-6'>
                <Link to={'/cart'} className='group flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                  </svg>

                  <span className='ml-2 text-sm font-medium group-' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    {cartItems.length}
                  </span>
                  <span className='sr-only'>items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
