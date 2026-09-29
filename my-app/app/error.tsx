"use client";

import { useEffect } from "react";

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
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        We could not load this page. Please try again.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
      >
        Try Again
      </button>
    </main>
  );
}
