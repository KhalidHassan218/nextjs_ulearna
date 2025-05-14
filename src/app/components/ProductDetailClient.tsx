"use client";

import { useState } from "react";
import { Product } from "../_lib/api";
import { useCart } from "../context/CartContext";
import ImageMagnifier from "./ImageMagnifier";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductDetailClient({
  product,
}: Readonly<{ product: Product }>) {
  const { dispatch } = useCart();
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleAddToCart = (color: string, size: string, quantity: number) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        color,
        size,
        quantity,
      },
    });
  };
  const toggleImageSlider = () => {
    setShowSlider(!showSlider);
  };

  const showChosenImage = (index: number) => {
    setSelectedImage(index);
  };
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 relative">
        {showSlider && (
          <div className="fixed  flex justify-center items-center z-[1000] w-full h-full bg-[#000000d2] top-0 left-0">
            <button
              onClick={toggleImageSlider}
              className="bg-white absolute top-[10%] left-[10%] w-4 h-4 p-3 cursor-pointer flex justify-center items-center  rounded-full text-black"
            >
              X
            </button>
            <ImageMagnifier  src={product.images[0]} />
          </div>
        )}
        <div className="md:w-1/2">
          <ProductGallery
            selectedImage={selectedImage}
            toggleImageSlider={toggleImageSlider}
            showChosenImage={showChosenImage}
            images={product.images}
          />
        </div>
        <div className="md:w-1/2">
          <ProductInfo product={product} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </main>
  );
}
