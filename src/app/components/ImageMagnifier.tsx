"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

type Props = {
  src: string;
  initialZoom?: number;
  width?: number;
  height?: number;
  className?: string;
  lensSize?: number;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
};

export default function ImageMagnifier({
  src,
  initialZoom = 1.5,
  width = 400,
  height = 400,
  className = "",
  lensSize = 150,
  minZoom = 1,
  maxZoom = 4,
  zoomStep = 0.1,
}: Readonly<Props>) {
  const [zoom, setZoom] = useState(initialZoom);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({
    naturalWidth: 0,
    naturalHeight: 0,
    displayedWidth: 0,
    displayedHeight: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Update image dimensions when loaded or resized
  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setImageDimensions({
          naturalWidth: imageRef.current.naturalWidth,
          naturalHeight: imageRef.current.naturalHeight,
          displayedWidth: containerRect.width,
          displayedHeight: containerRect.height,
        });
      }
    };

    const img = imageRef.current;
    if (img) {
      if (img.complete) {
        updateDimensions();
      } else {
        img.onload = updateDimensions;
      }
    }

    return () => {
      if (img) img.onload = null;
    };
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setZoom((prev) => {
      const direction = e.deltaY > 0 ? -1 : 1;
      const newZoom = prev + direction * zoomStep;
      return Math.min(maxZoom, Math.max(minZoom, Number(newZoom.toFixed(1))));
    });
  };

  // Calculate lens position within container bounds
  const getLensPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 };

    const maxX = width - lensSize;
    const maxY = height - lensSize;

    return {
      x: Math.max(0, Math.min(cursorPos.x - lensSize / 2, maxX)),
      y: Math.max(0, Math.min(cursorPos.y - lensSize / 2, maxY)),
    };
  };

  // Calculate the exact background position for magnification
  const getBackgroundPosition = () => {
    const { naturalWidth, naturalHeight, displayedWidth, displayedHeight } =
      imageDimensions;
    if (naturalWidth === 0 || naturalHeight === 0) return { x: 0, y: 0 };

    // Calculate aspect ratio differences
    const widthRatio = naturalWidth / displayedWidth;
    const heightRatio = naturalHeight / displayedHeight;

    // Adjust cursor position to natural image coordinates
    const adjustedX = cursorPos.x * widthRatio;
    const adjustedY = cursorPos.y * heightRatio;

    // Center the magnified view on the cursor
    return {
      x: adjustedX * zoom - lensSize / 2,
      y: adjustedY * zoom - lensSize / 2,
    };
  };

  // Add wheel event listener with passive: false
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const options = { passive: false };
    const handler = (e: WheelEvent) =>
      handleWheel(e as unknown as React.WheelEvent);

    container.addEventListener("wheel", handler, options);
    return () => container.removeEventListener("wheel", handler);
  }, [zoom]);

  const lensPosition = getLensPosition();
  const backgroundPos = getBackgroundPosition();

  return (
    <div
      ref={containerRef}
      className={`relative max-w-full  overflow-hidden ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchMove={handleTouchMove}
    >
      <Image
        ref={imageRef}
        src={src}
        alt="Magnified view"
        width={600}
        height={600}
        className="w-full max-w-full h-full object-contain select-none"
        draggable={false}
        priority
      />

      {isHovered && (
        <>
          <div
            className="absolute border-2 border-white rounded-md overflow-hidden shadow-lg pointer-events-none"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: `${lensPosition.x}px`,
              top: `${lensPosition.y}px`,
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imageDimensions.naturalWidth * zoom}px ${
                imageDimensions.naturalHeight * zoom
              }px`,
              backgroundPosition: `-${backgroundPos.x}px -${backgroundPos.y}px`,
            }}
          />

          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            Zoom: {zoom.toFixed(1)}x
          </div>
        </>
      )}
    </div>
  );
}
