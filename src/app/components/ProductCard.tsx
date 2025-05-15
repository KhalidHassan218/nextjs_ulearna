import React from "react";
import { Product } from "../_lib/api";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={
            product.images[0].startsWith("https")
              ? product.images[0]
              : "https://placehold.co/600x400"
          }
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-medium transition-all duration-700 ease-in-out dark:text-white text-gray-900">{product.title}</h3>
        <p className="text-gray-700 transition-all duration-700 ease-in-out dark:text-white">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
