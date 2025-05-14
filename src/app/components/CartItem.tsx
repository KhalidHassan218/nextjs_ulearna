"use client";

import Image from "next/image";
import { CartItem as CartItemProp, useCart } from "../context/CartContext";
import QuantitySelector from "./QuantitySelector";

type Props = {
  item: CartItemProp;
};

export default function CartItem({ item }: Readonly<Props>) {
  const { dispatch } = useCart();

  const updateQuantity = (quantity: number) => {
    const updatedQuantity = quantity <= 0 || isNaN(quantity) ? 1 : quantity;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        productId: item.productId,
        color: item.color,
        size: item.size,
        quantity: updatedQuantity,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        productId: item.productId,
        color: item.color,
        size: item.size,
      },
    });
  };

  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="80px"
          priority
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-2">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="mt-1 text-xs text-gray-500">
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
          <p>${item.price.toFixed(2)} each</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <QuantitySelector
            quantity={item.quantity}
            onIncrement={() => updateQuantity(item.quantity + 1)}
            onDecrement={() => updateQuantity(Math.max(1, item.quantity - 1))}
            onQuantityInputChange={(e) =>
              updateQuantity(parseInt(e.target.value))
            }
          />
          <button
            onClick={removeItem}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
