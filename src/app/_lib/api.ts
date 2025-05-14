// lib/api.ts
// API_BASE_URL = "https://api.escuelajs.co/api/v1";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const products = await response.json();

  // Add mock variants since API doesn't provide them
  return products.map((product: Product) => ({
    ...product,
    variants: {
      colors: ["Red", "Blue", "Green", "Black"],
      sizes: ["S", "M", "L", "XL"],
    },
  }));
};
export const fetchSingleProduct = async (
  productId: string
): Promise<Product> => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/products/${productId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch this product number : ${productId}`);
  }

  const product = await response.json();

  // Add mock variants since API doesn't provide them
  return {
    ...product,
    variants: {
      colors: ["Red", "Blue", "Green", "Black"],
      sizes: ["S", "M", "L", "XL"],
    },
  };
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  variants: {
    colors: string[];
    sizes: string[];
  };
}
