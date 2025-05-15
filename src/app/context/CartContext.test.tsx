import React from "react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "./CartContext";

// A test component that uses the useCart hook
const TestComponent = () => {
  const { state, dispatch } = useCart();

  return (
    <div>
      <div data-testid="cart-length">{state.items.length}</div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              productId: 1,
              quantity: 2,
              color: "red",
              size: "M",
              price: 29.99,
              title: "T-Shirt",
              image: "shirt.jpg",
            },
          })
        }
      >
        Add Item
      </button>
    </div>
  );
};

describe("CartProvider", () => {
  it("should allow adding an item to the cart", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId("cart-length").textContent).toBe("0");

    await user.click(screen.getByText("Add Item"));

    expect(screen.getByTestId("cart-length").textContent).toBe("1");
  });
});
