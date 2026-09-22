"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>

        <p className="mt-4 text-gray-600">
          We could not load this blog post. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
