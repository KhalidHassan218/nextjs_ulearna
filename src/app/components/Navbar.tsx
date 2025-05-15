"use client";
import React from "react";
import CartIcon from "./icons/CartIcon";
import { CartItem, useCart } from "../context/CartContext";
import Link from "next/link";
import ThemeToggleIcon from "./icons/ThemeToggleIcon";

const Navbar = () => {
  const { state, dispatch } = useCart();
  const handleOpenCart = () => {
    dispatch({
      type: "TOGGLE_CART",
    });
  };

  const cartQuantity: number = state.items.length
    ? state.items.reduce(
        (total: number, item: CartItem) => total + item.quantity,
        0
      )
    : 0;

  return (
    <div className="flex w-full  fixed top-0 z-[50] left-0 justify-between items-center py-5 px-5 bg-[#eb954f] dark:bg-black text-white transition-all duration-700 ease-in-out text-2xl ">
      <Link href={"/"}>
        <h1>ECOM Test</h1>
      </Link>
      <div className="flex items-center justify-between" >
        <div>
          <ThemeToggleIcon/>
        </div>
        <button onClick={handleOpenCart} className="relative cursor-pointer ">
          <div className="absolute w-3 h-3 top-0 right-0 rounded-full text-white bg-red-700 flex items-center p-3 justify-center text-xs">
            {cartQuantity}
          </div>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
