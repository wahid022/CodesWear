import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-1 mb-1 shadow-xl">
      <div className="logo">
        <Link href={"/"}>
          <Image src="/logo.jpg" alt="" height={60} width={70}></Image>
        </Link>
      </div>

      {/* Here /tshirts , /hoodies automaticallty fetchs the pages because of pages routing in nextJs all available inside pages folder thats why .. */}
      <div className="nav mx-5">
        <ul className="flex items-center space-x-8 font-bold md:text-md">
          <Link href={"/tshirts"}>
            {" "}
            <li>Tshirts</li>{" "}
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 top-5 mx-5">
        <FaCartArrowDown className="text:xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
