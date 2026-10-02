export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0e] text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>

        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}
