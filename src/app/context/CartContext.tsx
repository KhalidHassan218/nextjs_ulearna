"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

export type CartItem = {
  productId: number;
  quantity: number;
  color: string;
  size: string;
  price: number;
  title: string;
  image: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | {
      type: "REMOVE_ITEM";
      payload: { productId: number; color: string; size: string };
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: {
        productId: number;
        color: string;
        size: string;
        quantity: number;
      };
    }
  | { type: "TOGGLE_CART" }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      console.log(action.payload.quantity);

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }

      return { ...state, items: [...state.items, action.payload] };
    }
    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter(
        (item) =>
          !(
            item.productId === action.payload.productId &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
      return { ...state, items: filteredItems };
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map((item) => {
        if (
          item.productId === action.payload.productId &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    }
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
