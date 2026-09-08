export default function LoadingSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-4 mt-12 pb-20" aria-busy="true" aria-live="polite">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse flex flex-col">
            {/* Aspect ratio box matching the product image container exactly */}
            <div className="bg-gray-200 aspect-3/4 w-full rounded-2xl border border-gray-100"></div>
            
            {/* Text placeholders matching the exact card spacing margin mt-4 */}
            <div className="mt-4 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-1/4"></div> {/* Category */}
              <div className="h-4 bg-gray-200 rounded w-3/4"></div> {/* Title */}
              <div className="h-4 bg-gray-200 rounded w-1/3"></div> {/* Price */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}