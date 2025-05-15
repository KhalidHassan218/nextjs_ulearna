import { fetchAllProducts } from "@/app/_lib/api";
import ProductList from "../components/ProductsList";

export default async function ProductsPage() {
  const products = await fetchAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold dark:text-white text-black transition-all duration-700 ease-in-out mb-6">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}
