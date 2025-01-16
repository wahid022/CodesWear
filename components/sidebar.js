import React, { useRef } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";


const Sidebar = ({toggleCart,isCartOpen}) => {
 const ref = useRef();

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
        <ol>
          {/* Tshirt Item */}
          <li className="flex justify-between items-center mb-4">
            <div>
              <span className="font-medium">Tshirt-Wear the code</span>
              <p className="text-gray-400">₹499</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMinus className="cursor-pointer text-pink-500" />
              <span className="font-bold">10</span>
              <FaPlus className="cursor-pointer text-pink-500" />
            </div>
          </li>

          {/* Hoodie Item */}
          <li className="flex justify-between items-center mb-4">
            <div>
              <span className="font-medium">Hoodie - Stay Warm</span>
              <p className="text-gray-400">₹799</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMinus className="cursor-pointer text-pink-500" />
              <span className="font-bold">30</span>
              <FaPlus className="cursor-pointer text-pink-500" />
            </div>
          </li>

          {/* Mug Item */}
          <li className="flex justify-between items-center mb-4">
            <div>
              <span className="font-medium">Mug - Stay Hydrated</span>
              <p className="text-gray-400">₹299</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMinus className="cursor-pointer text-pink-500" />
              <span className="font-bold">30</span>
              <FaPlus className="cursor-pointer text-pink-500" />
            </div>
          </li>
        </ol>
        <div className="mt-5">
          <button className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600">
            Checkout
          </button>
        </div>
      </div>
  )
}

export default Sidebar
