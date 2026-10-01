import Link from "next/link";
import Footer from "../../components/Footer";

export default function MyPlan() {
  return (
    <main className="min-h-screen bg-[#191a1c] text-white">
      <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

        {/* Navbar */}
        <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
          <div className="flex min-h-14 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

            <Link href="/" className="flex shrink-0 items-center gap-2">
              <span className="text-xl text-lime-400">⚒</span>
              <span className="text-sm font-extrabold tracking-wide">
                FITLOG
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 sm:flex">
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

            {/* Desktop Counters */}
            <div className="hidden items-center gap-5 sm:flex">
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-300"
              >
                <span>Plan</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                  2
                </span>
              </Link>

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

            {/* Mobile Menu */}
            <Link
              href="/"
              className="rounded-md border border-[#25282d] px-3 py-2 text-[10px] text-gray-400 sm:hidden"
            >
              Workouts
            </Link>
          </div>
        </header>

        {/* Content */}
        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
              My Plan
            </h1>

            <p className="mt-1 max-w-xl text-[10px] leading-5 text-gray-500 sm:text-[11px]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#25282d] bg-[#121419] sm:grid-cols-3">

            <div className="border-b border-[#202329] px-5 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[9px] text-gray-500">Exercises</p>
              <p className="mt-1 text-3xl font-bold text-lime-400">2</p>
            </div>

            <div className="border-b border-[#202329] px-5 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[9px] text-gray-500">Minutes</p>
              <p className="mt-1 text-3xl font-bold text-white">23</p>
            </div>

            <div className="px-5 py-5">
              <p className="text-[9px] text-gray-500">Calories</p>
              <p className="mt-1 text-3xl font-bold text-white">190</p>
            </div>
          </div>

          {/* Tabs / Sort */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex w-fit rounded-lg border border-[#25282d] bg-[#121419] p-1">
              <button className="rounded-md px-4 py-2 text-[9px] text-gray-500">
                Today&apos;s Plan
              </button>

              <button className="rounded-md bg-[#252a31] px-4 py-2 text-[9px] font-semibold text-white">
                Saved
              </button>
            </div>

            <button className="flex w-fit items-center gap-2 text-[9px] text-gray-500">
              <span>Sort By</span>

              <span className="rounded-md border border-[#25282d] px-3 py-2 text-gray-400">
                Duration <span className="ml-2">⌄</span>
              </span>
            </button>
          </div>

          {/* Empty State */}
          <div className="mt-4 flex min-h-[210px] items-center justify-center rounded-xl border border-dashed border-[#25282d] bg-[#0d0f12] px-5 py-10">
            <div className="text-center">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Nothing Here Yet
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-[9px] leading-5 text-gray-500">
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

        <Footer />
      </div>
    </main>
  );
}