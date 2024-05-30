import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Cart = ({ cartCount }) => {
  return (
    <div className="relative">
      <div className="cursor-pointer p-2">
        <MdOutlineShoppingBag className="text-2xl text-white "></MdOutlineShoppingBag>
      </div>
      <div className="absolute top-2 right-0 bg-gray-200 px-1 flex items-center justify-center rounded">
        <p className="text-xs font-semibold">{cartCount}</p>
      </div>
    </div>
  );
};

export default Cart;
