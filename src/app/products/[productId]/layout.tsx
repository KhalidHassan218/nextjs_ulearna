import type { Metadata } from "next";

type props = { params: Promise<{ productId: string }> };

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: { default: `product ${productId}`, template: "" },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
