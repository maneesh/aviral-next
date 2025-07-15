// app/your-page-path/loading.tsx

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-700">
      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        Aviral
        <span className="text-green-500">ai</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-green-500 mb-4">
        ai
      </h2>
      <p className="text-lg font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
