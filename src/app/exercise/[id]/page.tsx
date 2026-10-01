"use client";

import { useState } from "react";
import Link from "next/link";
import Library from "../components/Library";
import Footer from "../components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const todayPlanCount = 0;
  const savedCount = 0;

  return (
    <main className="min-h-screen bg-[#191a1c] text-white">
      <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

        {/* Navbar */}
        <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
          <div className="flex min-h-14 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

            {/* Logo */}
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
                className="rounded-full bg-[#18250d] px-5 py-1.5 text-[11px] font-semibold text-lime-400"
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                className="px-3 py-1.5 text-[11px] text-gray-400 transition hover:text-white"
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
                  {todayPlanCount}
                </span>
              </Link>

              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-[10px] text-gray-400"
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
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#25282d] text-gray-300 sm:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="border-t border-[#1d1f23] px-4 py-4 sm:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md bg-[#18250d] px-4 py-3 text-xs font-semibold text-lime-400"
                >
                  Workouts
                </Link>

                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-xs text-gray-400 hover:bg-[#16181d] hover:text-white"
                >
                  My Plan
                </Link>

                <div className="mt-2 flex gap-4 border-t border-[#25282d] pt-4 text-xs">
                  <Link href="/my-plan" className="text-gray-400">
                    Plan:{" "}
                    <span className="text-lime-400">{todayPlanCount}</span>
                  </Link>

                  <Link href="/my-plan" className="text-gray-400">
                    Saved:{" "}
                    <span className="text-white">{savedCount}</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Space */}
        <div className="h-10 sm:h-14 lg:h-20"></div>

        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-[#25282d]">
            <img
              src="/banner.png"
              alt="FitLog workout banner"
              className="h-[220px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="p-5 sm:p-8 lg:p-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-[10px]">
                  Train smarter
                </p>

                <h1 className="mt-2 max-w-xl text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Build your workout.
                </h1>

                <p className="mt-3 max-w-lg text-xs leading-5 text-gray-300 sm:text-sm">
                  Explore exercises, build your plan, and stay consistent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <Library />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}