import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOM Products",
  description: "Browser ECOM All our unique products",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-6 dark:bg-black text-white transition-all duration-700 ease-in-out">{children}</div>;
}
