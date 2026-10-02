
import Library from "../components/Library";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#191a1c]">
        {/* HERO */}
        <section className="px-6 pb-8">
          <div className="mx-auto flex min-h-[315px] max-w-[1120px] flex-col overflow-hidden rounded-xl border border-[#25282d] bg-[#16181d] md:flex-row">

            {/* LEFT SIDE */}
            <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-[62%]">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-lime-400">
                WORKOUT LIBRARY
              </p>

              <h1 className="max-w-[520px] font-['Oswald'] text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p className="mt-5 max-w-[480px] text-sm leading-6 text-gray-400">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add up.
              </p>

              <div className="mt-5">
                <a
                  href="#library"
                  className="inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300"
                >
                  <span>BROWSE WORKOUTS</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - HERO IMAGE */}
            <div className="flex min-h-[220px] w-full items-center justify-center md:min-h-0 md:w-[38%]">
              <img
                src="/banner.png"
                alt="Workout illustration"
                className="h-[220px] w-[220px] object-contain md:h-[280px] md:w-[280px]"
              />
            </div>
          </div>
        </section>

        {/* WORKOUT LIBRARY */}
        <Library />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}