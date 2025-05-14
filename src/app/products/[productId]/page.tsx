import { fetchSingleProduct } from "@/app/_lib/api";
import ProductDetailClient from "@/app/components/ProductDetailClient";

export default async function ProductPage({
  params,
}: Readonly<{
  params: Promise<{ productId: string }>;
}>) {
  const { productId } = await params;
  const product = await fetchSingleProduct(productId);

  return <ProductDetailClient product={product} />;
}
