import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <Image
          src="/ecommerce2.jpg"
          alt="Modern fashion collection"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elevate Your Style
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Discover our premium collection crafted for the modern individual
          </p>
          <Link
            href="/products"
            className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce hover:animate-none"
          >
            Shop Now →
          </Link>
        </div>
      </div>
    </main>
  );
}
