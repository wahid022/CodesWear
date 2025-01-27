import React from "react";

const Order = ({ subTotal }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 lg:w-1/2 lg:h-auto h-64 object-cover object-center rounded-lg mb-6 lg:mb-0">
            <img
              alt="ecommerce"
              className="w-full h-full object-contain rounded-lg"
              src="https://m.media-amazon.com/images/I/619w3t6+m6L._SX679_.jpg"
            />
          </div>

          {/* Order Details */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              CodesWear.com
            </h2>
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              Order ID : <span className="text-pink-500">#89777</span>
            </h1>
            <p className="text-green-500 font-semibold mb-4">
              Your Order Has Been Successfully Placed
            </p>

            {/* Item Details Table */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
              <div className="flex bg-gray-100 p-4 rounded-t-lg">
                <span className="flex-grow text-gray-700 font-medium">
                  Item Description
                </span>
                <span className="flex-grow text-center text-gray-700 font-medium">
                  Quantity
                </span>
                <span className="flex-grow text-right text-gray-700 font-medium">
                  Item Total
                </span>
              </div>
              {/* Product Items */}
              <div className="flex border-t border-gray-200 py-2 px-4">
                <span className="text-gray-600">Wear The Code (XL/Black)</span>
                <span className="ml-auto text-center text-gray-900">1</span>
                <span className="ml-auto text-right text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 px-4">
                <span className="text-gray-600">Wear The Code (XL/Red)</span>
                <span className="ml-auto text-center text-gray-900">1</span>
                <span className="ml-auto text-right text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 px-4">
                <span className="text-gray-600">Wear The Code (XL/Blue)</span>
                <span className="ml-auto text-center text-gray-900">1</span>
                <span className="ml-auto text-right text-gray-900">₹499</span>
              </div>
              {/* Total Price Section */}
              <div className="flex flex-col px-4 py-4 border-t border-gray-200">
                <span className="text-2xl font-semibold text-gray-900">
                  Total: <span className="text-pink-500">₹{subTotal}</span>
                </span>
                <button
                  type="submit"
                  className="w-60 my-4 bg-pink-400 text-white py-3 rounded-lg font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center justify-center space-x-2"
                >
                  <span>Track Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
