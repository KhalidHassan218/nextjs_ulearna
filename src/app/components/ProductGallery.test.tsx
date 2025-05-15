import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock ImageMagnifier component
import React from "react";
import ProductGallery from "@/app/components/ProductGallery";

jest.mock("./ImageMagnifier", () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => {
    return <img src={src} alt="Main product image" />;
  },
}));

describe("ProductGallery Component", () => {
  const mockImages = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];
  const mockShowChosenImage = jest.fn();
  const mockToggleSlider = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders main image and thumbnails", () => {
    render(
      <ProductGallery
        images={mockImages}
        showChosenImage={mockShowChosenImage}
        selectedImage={0}
        toggleImageSlider={mockToggleSlider}
      />
    );

    expect(screen.getByAltText("Main product image")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(mockImages.length + 1); // +1 for main image
  });

  it("calls toggleImageSlider when main image is clicked", () => {
    render(
      <ProductGallery
        images={mockImages}
        showChosenImage={mockShowChosenImage}
        selectedImage={0}
        toggleImageSlider={mockToggleSlider}
      />
    );

    fireEvent.click(screen.getByAltText("Main product image"));
    expect(mockToggleSlider).toHaveBeenCalledTimes(1);
  });

  it("highlights selected thumbnail", () => {
    render(
      <ProductGallery
        images={mockImages}
        showChosenImage={mockShowChosenImage}
        selectedImage={1}
        toggleImageSlider={mockToggleSlider}
      />
    );

    const thumbnails = screen.getAllByRole("button").slice(1); // skip main image button
    expect(thumbnails[1]).toHaveClass("border-blue-500"); // second thumbnail should be selected
  });
});
