import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../Components/Modal/Contact";
import Cart from "./Cart";

//importing icons
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductNavbar = ({ cartCount }) => {
  return (
    <>
      <div className="absolute flex items-center justify-center w-full z-[1]">
        <div className=" w-full lg:w-4/5 flex items-center justify-between font-figtree p-4">
          <Link to="/" className="text-2xl text-white p-2">
            <IoIosArrowBack />
          </Link>
          <Cart cartCount={cartCount} />
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
