"use client";

export default function ProductLoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery Skeleton */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-200 rounded-lg aspect-square w-full"></div>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-md h-20 w-20"></div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>

          <div className="h-6 bg-gray-200 rounded w-1/4"></div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-full h-8 w-8"></div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-md h-8 w-8"></div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 rounded-md h-8 w-8"></div>
              <div className="bg-gray-200 rounded-md h-6 w-6"></div>
              <div className="bg-gray-200 rounded-md h-8 w-8"></div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md h-12 w-full"></div>

          <div className="border-t border-gray-200 pt-6"></div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
