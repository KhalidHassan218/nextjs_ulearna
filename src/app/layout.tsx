import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { ErrorWrapper } from "./error-wrapper";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce test app",
  description: "Ecommerce test app for Ulearna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorWrapper>
          <ThemeProvider>
            <ThemeWrapper>
              <CartProvider>
                <header className="relative">
                  <Navbar />
                  <Cart />
                </header>

                <div>{children}</div>

                <footer className="row-start-3 dark:bg-black dark:text-white flex gap-[24px] flex-wrap items-center justify-center">
                  <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    Ulearna - Nextjs 15 - frontend position test
                  </span>
                  <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    Made by Khalid Walid Osman - 13/05/2025 copyright &copy;
                    reserved
                  </span>
                </footer>
              </CartProvider>
            </ThemeWrapper>
          </ThemeProvider>
        </ErrorWrapper>
      </body>
    </html>
  );
}
