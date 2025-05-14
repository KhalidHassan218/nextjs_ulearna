"use client";

import { ChangeEvent } from "react";

type QuantitySelectorProps = {
  quantity: number;
  onQuantityInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function QuantitySelector({
  quantity,
  onQuantityInputChange,
  onIncrement,
  onDecrement,
}: Readonly<QuantitySelectorProps>) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
      <div className="flex items-center border border-gray-300 rounded-md w-fit">
        <button
          type="button"
          onClick={onDecrement}
          className="px-3  cursor-pointer py-1 text-lg font-medium"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => onQuantityInputChange(e)}
          className="px-4 outline-0 w-14 py-1 border-x border-gray-300 text-center  "
        />
        <button
          type="button"
          onClick={onIncrement}
          className="px-3  cursor-pointer py-1 text-lg font-medium"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}
