"use client";

import { useState } from "react";
import Link from "next/link";
import Library from "../components/Library";
import Footer from "../components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // These will later connect to your actual workout data
  const todayPlanCount = 0;
  const savedCount = 0;

  return (
    <main className="min-h-screen bg-[#191a1c] text-white">
      <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

        {/* ================= NAVBAR ================= */}
        <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
          <div className="flex h-14 items-center justify-between px-8">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl text-lime-400">
                ⚒
              </span>

              <span className="text-sm font-extrabold tracking-wide text-white">
                FITLOG
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 md:flex">

              <button className="rounded-full bg-[#18250d] px-5 py-1.5 text-[11px] font-semibold text-lime-400">
                Workouts
              </button>

              <Link
                href="/my-plan"
                className="px-3 py-1.5 text-[11px] text-gray-400 hover:text-white"
              >
                My Plan
              </Link>

            </div>

            {/* Right Side */}
            <div className="hidden items-center gap-5 md:flex">

              {/* Plan */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-300 hover:text-white"
              >
                <span>Plan</span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                  {todayPlanCount}
                </span>
              </Link>

              {/* Saved */}
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-white"
              >
                <span>Saved</span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px]">
                  {savedCount}
                </span>
              </Link>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl text-white md:hidden"
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="border-t border-[#1d1f23] px-6 py-4 md:hidden">

              <div className="flex flex-col gap-3">

                <button className="rounded-lg bg-[#18250d] px-4 py-3 text-left text-lime-400">
                  Workouts
                </button>

                <Link
                  href="/my-plan"
                  className="px-4 py-2 text-gray-400"
                >
                  My Plan
                </Link>

                <Link
                  href="/my-plan"
                  className="flex items-center justify-between border-t border-gray-800 pt-3 text-sm text-gray-400"
                >
                  <span>
                    Plan{" "}
                    <span className="text-lime-400">
                      {todayPlanCount}
                    </span>
                  </span>

                  <span>
                    Saved{" "}
                    <span className="text-gray-300">
                      {savedCount}
                    </span>
                  </span>
                </Link>

              </div>

            </div>
          )}

        </header>

        {/* ================= SPACE ================= */}
        <div className="h-20"></div>

        {/* ================= HERO ================= */}
        <section className="px-6 pb-8">

          <div className="mx-auto flex min-h-[315px] max-w-[1120px] overflow-hidden rounded-xl border border-[#25282d] bg-[#16181d]">

            {/* LEFT SIDE */}
            <div className="flex w-full flex-col justify-center px-10 py-12 md:w-[62%]">

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-lime-400">
                Workout Library
              </p>

              <h1 className="max-w-[520px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                Train With Intent. Log Every Set.
              </h1>

              <p className="mt-5 max-w-[480px] text-sm leading-5 text-gray-400">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <div className="mt-5">
                <button className="rounded-md bg-lime-400 px-5 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300">
                  Browse Workouts
                </button>
              </div>

            </div>

            {/* RIGHT SIDE - PNG */}
            <div className="hidden w-[38%] items-center justify-center md:flex">

              <img
                src="/banner.png"
                alt="Workout illustration"
                className="h-[280px] w-[280px] object-contain"
              />

            </div>

          </div>

        </section>

        {}
        <Library />

        {}
        <Footer />

      </div>
    </main>
  );
}