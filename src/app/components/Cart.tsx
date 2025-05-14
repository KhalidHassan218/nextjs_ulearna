"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import clsx from "clsx";

const Cart = () => {
  const { state, dispatch } = useCart();
  const handleOpenCart = () => {
    dispatch({
      type: "TOGGLE_CART",
    });
  };
  return (
    <div
      className={clsx(
        `h-screen fixed border-l transition-all top-0  right-0 duration-1000 ease-in-out shadow-lg z-[60] overflow-y-scroll w-full md:w-1/2 lg:w-1/4 bg-white `,
        state.isOpen && " translate-x-0",
        !state.isOpen && " translate-x-[1000px]"
      )}
    >
      <div className="flex py-4 w-full justify-end">
        <button
          onClick={handleOpenCart}
          className="bg-red-700  w-5 h-5 p-3 cursor-pointer flex justify-center items-center  rounded-full text-white"
        >
          X
        </button>
      </div>
      <div className="flex flex-col p-2 items-center gap-2">
        {state.items.length ? (
          <div className="w-full h-full">
            {state.items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.color}-${item.size}`}
                item={item}
              />
            ))}
          </div>
        ) : (
          "Cart is Empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
