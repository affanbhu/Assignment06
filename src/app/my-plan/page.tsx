import Link from "next/link";
import Footer from "../../components/Footer";

export default function MyPlan() {
  return (
    <main className="min-h-screen bg-[#191a1c] text-white">

      <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

        {/* ================= NAVBAR ================= */}
        <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
          <div className="flex h-14 items-center justify-between px-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl text-lime-400">
                ⚒
              </span>

              <span className="text-sm font-extrabold tracking-wide text-white">
                FITLOG
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-3">

              <Link
                href="/"
                className="px-3 py-1.5 text-[11px] text-gray-400 hover:text-white"
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full bg-[#18250d] px-5 py-1.5 text-[11px] font-semibold text-lime-400"
              >
                My Plan
              </Link>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

              {/* Plan */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-300"
              >
                <span>Plan</span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                  2
                </span>
              </Link>

              {/* Saved */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-400"
              >
                <span>Saved</span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px]">
                  2
                </span>
              </Link>

            </div>

          </div>
        </header>

        {/* ================= MY PLAN CONTENT ================= */}
        <section className="px-8 py-8">

          {/* Title */}
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              My Plan
            </h1>

            <p className="mt-1 text-[11px] text-gray-500">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* ================= STATISTICS ================= */}
          <div className="mt-5 grid grid-cols-3 rounded-xl border border-[#25282d] bg-[#121419]">

            {/* Exercises */}
            <div className="border-r border-[#202329] px-5 py-6">
              <p className="text-[9px] text-gray-500">
                Exercises
              </p>

              <p className="mt-1 text-3xl font-bold text-lime-400">
                2
              </p>
            </div>

            {/* Minutes */}
            <div className="border-r border-[#202329] px-5 py-6">
              <p className="text-[9px] text-gray-500">
                Minutes
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                23
              </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-6">
              <p className="text-[9px] text-gray-500">
                Calories
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                190
              </p>
            </div>

          </div>

          {/* ================= TABS + SORT ================= */}
          <div className="mt-5 flex items-center justify-between">

            {/* Tabs */}
            <div className="flex rounded-lg border border-[#25282d] bg-[#121419] p-1">

              <button className="rounded-md px-4 py-2 text-[9px] text-gray-500">
                Today&apos;s Plan
              </button>

              <button className="rounded-md bg-[#252a31] px-4 py-2 text-[9px] font-semibold text-white">
                Saved
              </button>

            </div>

            {/* Sort */}
            <button className="flex items-center gap-2 text-[9px] text-gray-500">
              <span>Sort By</span>

              <span className="rounded-md border border-[#25282d] px-3 py-2 text-gray-400">
                Duration
                <span className="ml-2">⌄</span>
              </span>
            </button>

          </div>

          {/* ================= EMPTY STATE ================= */}
          <div className="mt-4 flex min-h-[210px] items-center justify-center rounded-xl border border-dashed border-[#25282d] bg-[#0d0f12]">

            <div className="text-center">

              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-[9px] text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-4 inline-block rounded-full bg-lime-400 px-5 py-2 text-[9px] font-bold text-black transition hover:bg-lime-300"
              >
                Go to workouts
              </Link>

            </div>

          </div>

        </section>

        {/* ================= FOOTER ================= */}
        <Footer />

      </div>

    </main>
  );
}