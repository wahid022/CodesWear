import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
      <div className="logo">
        <Image src="/logo.jpg" alt="" height={50} width={100}></Image>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href={"/"}>
            {" "}
            <li>Tshirts</li>{" "}
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 top-10 mx-5">
        <FaCartArrowDown className="text:xl md:text-4xl"/>
      </div>
    </div>
  );
};

export default Navbar;
