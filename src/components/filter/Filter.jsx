import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';

function Filter() {
  const context = useContext(myContext);
  const {
    mode,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
    setFilteredProducts,
  } = context;

  const handleResetFilter = () => {
    // Reset only the filter values
    setFilterType('');
    setFilterPrice('');
  };

  const handleFilterProducts = () => {
    let newFilteredProducts = [...product];

    if (filterType !== '') {
      newFilteredProducts = newFilteredProducts.filter(item => item.category.toLowerCase() === filterType.toLowerCase());
    }

    if (filterPrice !== '') {
      newFilteredProducts = newFilteredProducts.filter(item => parseFloat(item.price) <= parseFloat(filterPrice));
    }

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div>
      <div className=' container mx-auto px-4 mt-5 '>
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === 'dark' ? '#282c34' : '',
            color: mode === 'dark' ? 'white' : '',
          }}
        >
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              {/* ... Your search icon */}
            </div>
            <input
              type="text"
              name="searchkey"
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
              id="searchkey"
              placeholder="Search here"
              className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
              style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
            <button
              onClick={() => {
                handleResetFilter();
                handleFilterProducts();
              }}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              Reset Filter
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  handleFilterProducts();
                }}
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <option value="">Select Type</option>
                {product.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
              <select
                value={filterPrice}
                onChange={(e) => {
                  setFilterPrice(e.target.value);
                  handleFilterProducts();
                }}
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <option value="">Select Price</option>
                {Array.from(new Set(product.map(item => parseFloat(item.price)))).map((price, index) => (
  <option key={index} value={price}>
    {price}
  </option>
))}

              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
