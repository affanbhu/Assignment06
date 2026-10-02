import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-lime-400 px-6 py-3 text-xs font-black uppercase text-black hover:bg-lime-300"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
