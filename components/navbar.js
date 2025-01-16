import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Track the cart visibility state
  // const ref = useRef();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle the cart open/close state or changing the cart value if false->true and vice-versa
  };

  // Ensure body overflow is hidden when cart is open
  // Jab bhi iscartOpen change honga tab useEffect call honga

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"; // Scroll Nahi honga Page when cart is open
    } else {
      document.body.style.overflow = ""; // Enable scrolling when cart is closed
    }
  }, [isCartOpen]);

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-col md:flex-row items-center py-1 mb-1 shadow-xl relative">
        <div className="logo">
          <Link href={"/"}>
            <Image src="/logo.jpg" alt="Logo" height={60} width={70} />
          </Link>
        </div>

        {/* Navbar links */}
        <div className="nav mx-5">
          <ul className="flex items-center space-x-8 font-bold md:text-md">
            <Link href={"/tshirts"}>
              <li className="text-gray-700 hover:text-pink-500">Tshirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li className="text-gray-700 hover:text-pink-500">Hoodies</li>
            </Link>
            <Link href={"/mugs"}>
              <li className="text-gray-700 hover:text-pink-500">Mugs</li>
            </Link>
            <Link href={"/stickers"}>
              <li className="text-gray-700 hover:text-pink-500">Stickers</li>
            </Link>
          </ul>
        </div>

        <div
          onClick={toggleCart}
          className="cart absolute right-0 top-5 mx-5 cursor-pointer md:block"
        >
          <FaCartArrowDown className="text-xl md:text-2xl text-pink-500 hover:text-pink-700" />
        </div>
      </div>

      {/* Here Sidebar component is called with required props  */}

      <Sidebar toggleCart={toggleCart} isCartOpen={isCartOpen}></Sidebar>
    </div>
  );
};

export default Navbar;
