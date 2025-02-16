import React, { useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const Sidebar = ({
  cart,
  toggleCart,
  isCartOpen,
  clearCart,
  addTocart,
  removeFromCart,
  subTotal
}) => {
  const ref = useRef();

  console.log("objectKeys Array >>>", Object.keys(cart));
  console.log("cartItems", cart);
  return (
    // {/* Sidebar Cart (visible for all devices) */}
    //   {/* isCartOpen ? "translate-x-0" : "translate-x-full" will check for transition of sidebar */}
    <div
      ref={ref}
      className={`sideCart fixed top-0 right-0 bg-white w-80 h-full shadow-2xl py-10 px-5 transform transition-transform z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="font-bold text-xl border-b pb-4">Shopping Cart</h2>
      <span
        onClick={toggleCart}
        className="absolute top-5 right-5 cursor-pointer text-3xl text-pink-500"
      >
        <IoCloseCircle />
      </span>

      {/* Cart  Items */}
      <ol>
        {/* Checking that if No items in the cart then displaying the message.. */}
        {Object.keys(cart).length == 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty !</div>
        )}

        {Object.keys(cart).map((k) => {
          return (
            <li key={k} className="flex justify-between items-center mb-4">
              <div>
                <span className="font-medium">{cart[k].name+'-'+ cart[k].variant+'('+cart[k].size+')'}</span>
                <p className="text-gray-400">{cart[k].price}</p>
              </div>
              <div className="flex items-center space-x-2">
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
                  className="cursor-pointer text-pink-500"
                />
                <span className="font-bold">{cart[k].qty}</span>
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
                  className="cursor-pointer text-pink-500"
                />
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm font-semibold text-gray-800">
            Total Amount: <span className="text-pink-500">₹{subTotal}</span>
          </p>

      <div className="mt-5">
        <Link href={"/checkout"}>
          <button className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 flex items-center justify-center space-x-2">
            <FaShoppingCart className="text-white text-lg" />
            <span>Checkout</span>
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <button
          onClick={clearCart}
          className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 flex items-center justify-center space-x-2"
        >
          <FaTrash className="text-white text-lg" />
          <span>Clear Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
