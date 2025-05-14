"use client";

import { useState } from "react";
import VariantSelector from "./VariantSelector";
import QuantitySelector from "./QuantitySelector";
import DescriptionAccordion from "./DescriptionAccordion";

type ProductInfoProps = {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    variants: {
      colors: string[];
      sizes: string[];
    };
  };
  onAddToCart: (color: string, size: string, quantity: number) => void;
};

export default function ProductInfo({
  product,
  onAddToCart,
}: Readonly<ProductInfoProps>) {
  const [selectedColor, setSelectedColor] = useState(
    product.variants.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(selectedColor, selectedSize, quantity);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>

      <VariantSelector
        label="Color"
        options={product.variants.colors}
        selected={selectedColor}
        onSelect={setSelectedColor}
      />

      <VariantSelector
        label="Size"
        options={product.variants.sizes}
        selected={selectedSize}
        onSelect={setSelectedSize}
      />

      <QuantitySelector
        quantity={quantity}
        onQuantityInputChange={(e) => setQuantity(parseInt(e.target.value))}
        onIncrement={() => setQuantity((q) => q + 1)}
        onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
      />

      <button
        onClick={handleAddToCart}
        className="w-full cursor-pointer bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>

      <DescriptionAccordion description={product.description} />
    </div>
  );
}
