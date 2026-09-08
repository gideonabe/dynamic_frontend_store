'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-black text-pl-plum mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">We couldn't load the store data.</p>
      <button
        onClick={() => reset()}
        className="bg-pl-plum text-white px-6 py-3 rounded-full font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pl-plum hover:bg-pl-plumHover transition-colors"
      >
        Try again
      </button>
    </main>
  );
}