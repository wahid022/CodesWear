import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";

const Checkout = ({ cart, addTocart, removeFromCart, subTotal }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Checkout
      </h1>
      <form>
        {/* Section 1: Delivery Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            1. Delivery Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-gray-600 font-medium mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="3"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-gray-600 font-medium mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-gray-600 font-medium mb-2"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your state"
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-gray-600 font-medium mb-2"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your pincode"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-600 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Review Cart Items */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            2. Review Cart Items And Pay
          </h2>
          <ol className="space-y-4">
            {/* Display empty cart message */}
            {Object.keys(cart).length === 0 && (
              <div className="text-gray-600 font-medium">
                Your cart is empty!
              </div>
            )}

            {/* Display cart items */}
            {Object.keys(cart).map((k) => {
              return (
                <li
                  key={k}
                  className="flex justify-between items-center bg-pink-100 p-4 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {cart[k].name}
                    </p>
                    <p className="text-gray-500 text-sm">₹{cart[k].price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMinus
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="cursor-pointer text-pink-500 hover:text-pink-600"
                    />
                    <span className="font-semibold">{cart[k].qty}</span>
                    <FaPlus
                      onClick={() =>
                        addTocart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="cursor-pointer text-pink-500 hover:text-pink-600"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-sm font-semibold text-gray-800">
            Total Amount: <span className="text-pink-500">₹{subTotal}</span>
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="w-60 bg-pink-400 text-white py-3 rounded-lg font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center justify-center space-x-2"
          >
            <span>Place Order</span>
            <span>₹{subTotal}</span>
          </button>

          {/* Payment Icons */}
          <div className="mt-4 flex space-x-4 text-pink-500 text-2xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
