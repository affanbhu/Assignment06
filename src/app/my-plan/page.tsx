import Link from "next/link";

export default function MyPlan() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10 text-white">

      <div className="mx-auto max-w-[1000px]">

        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-lime-400"
        >
          ← Back to Workouts
        </Link>

        <h1 className="mt-8 text-4xl font-black uppercase">
          My Plan
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Today's Plan */}
          <div className="rounded-xl border border-[#25282d] bg-[#16181d] p-6">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold">
                Today&apos;s Plan
              </h2>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                0
              </span>

            </div>

            <p className="mt-4 text-sm text-gray-400">
              No workouts have been added to today&apos;s plan yet.
            </p>

          </div>

          {/* Saved */}
          <div className="rounded-xl border border-[#25282d] bg-[#16181d] p-6">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold">
                Saved
              </h2>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-sm">
                0
              </span>

            </div>

            <p className="mt-4 text-sm text-gray-400">
              You have no saved workouts yet.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}