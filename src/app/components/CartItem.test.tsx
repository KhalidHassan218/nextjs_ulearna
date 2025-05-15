import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";
import "@testing-library/jest-dom";  
import { CartItem as CartItemType } from "../context/CartContext";

jest.mock("next/image", () => {
  const MockImage = (props: { alt: string; src: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || "mocked image"} />;
  };
  MockImage.displayName = "MockNextImage";
  return MockImage;
});

// Mock useCart
const mockDispatch = jest.fn();
jest.mock("../context/CartContext", () => {
  const originalModule = jest.requireActual("../context/CartContext");
  return {
    ...originalModule,
    useCart: () => ({
      dispatch: mockDispatch,
    }),
  };
});

const mockItem: CartItemType = {
  productId: 101,
  title: "Test Product",
  quantity: 2,
  color: "Red",
  size: "L",
  price: 19.99,
  image: "/test-image.jpg",
};

describe("CartItem", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("renders item details", () => {
    render(<CartItem item={mockItem} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Color: Red")).toBeInTheDocument();
    expect(screen.getByText("Size: L")).toBeInTheDocument();
    expect(screen.getByText("$19.99 each")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test-image.jpg");
  });

  it("calls dispatch with UPDATE_QUANTITY on increment", () => {
    render(<CartItem item={mockItem} />);
    fireEvent.click(screen.getByRole("button", { name: /increase quantity/i }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_QUANTITY",
      payload: {
        productId: 101,
        color: "Red",
        size: "L",
        quantity: 3,
      },
    });
  });

  it("calls dispatch with UPDATE_QUANTITY on decrement", () => {
    render(<CartItem item={mockItem} />);
    fireEvent.click(screen.getByRole("button", { name: /decrease quantity/i }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_QUANTITY",
      payload: {
        productId: 101,
        color: "Red",
        size: "L",
        quantity: 1,
      },
    });
  });

  it("calls dispatch with REMOVE_ITEM when remove is clicked", () => {
    render(<CartItem item={mockItem} />);
    fireEvent.click(screen.getByRole("button", { name: "Remove item" }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_ITEM",
      payload: {
        productId: 101,
        color: "Red",
        size: "L",
      },
    });
  });
});
