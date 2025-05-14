"use client";

import { useEffect, useState } from "react";
import { fetchAllProducts, Product } from "@/app/_lib/api";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        // Add mock variants to each product
        const productsWithVariants = data.map((product: Product) => ({
          ...product,
          variants: {
            colors: ["Red", "Blue", "Green", "Black"],
            sizes: ["S", "M", "L", "XL"],
          },
        }));
        setProducts(productsWithVariants);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};
