export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-700">
      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        Aviral
        <span className="text-green-500">ai</span>
      </h1>
      <p className="text-lg font-medium animate-pulse">Loading content...</p>
    </div>
  );
}