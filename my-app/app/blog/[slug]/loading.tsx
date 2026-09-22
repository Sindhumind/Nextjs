export default function Loading() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-10 w-3/4 rounded bg-gray-200" />

        <div className="mt-4 h-4 w-1/3 rounded bg-gray-200" />

        <div className="mt-8 space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
