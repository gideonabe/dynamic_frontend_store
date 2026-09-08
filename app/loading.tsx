export default function Loading() {
  // Skeleton loader for performance perception
  return (
    <main className="max-w-7xl mx-auto px-4 py-12" aria-busy="true" aria-live="polite">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse flex flex-col gap-4">
            <div className="bg-gray-200 aspect-3/4 w-full rounded-2xl"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </main>
  );
}