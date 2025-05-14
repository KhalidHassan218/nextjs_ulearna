"use client";

import Image from "next/image";
import ImageMagnifier from "./ImageMagnifier";

export default function ProductGallery({
  images,
  showChosenImage,
  selectedImage,
  toggleImageSlider,
}: Readonly<{
  images: string[];
  showChosenImage: (index: number) => void;
  selectedImage: number;
  toggleImageSlider: () => void;
}>) {
  return (
    <div>
      <button
        onClick={() => toggleImageSlider()}
        className="mb-4 max-w-full w-screen cursor-pointer relative aspect-square overflow-hidden rounded-lg"
      >
        <ImageMagnifier
          width={600}
          height={600}
          className="w-full h-full object-contain"
          src={images[selectedImage]}
        />
      </button>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => showChosenImage(index)}
            className={`w-20 h-20 relative rounded border-2 overflow-hidden transition-all ${
              selectedImage === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
