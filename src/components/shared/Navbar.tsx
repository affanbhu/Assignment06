"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl text-lime-400">⚒</span>

          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-3 md:flex">

          <a
            href="#"
            className="rounded-full bg-[#18250d] px-5 py-1.5 text-[11px] font-semibold text-lime-400"
          >
            Workouts
          </a>

          <a
            href="#"
            className="px-3 py-1.5 text-[11px] text-gray-400 hover:text-white"
          >
            My Plan
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">

          <div className="flex items-center gap-2 text-[10px] text-gray-300">
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span>Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px]">
              0
            </span>
          </div>

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
        <div className="border-t border-[#1d1f23] bg-[#0b0c0e] px-6 py-4 md:hidden">

          <div className="flex flex-col gap-3">

            <a
              href="#"
              className="rounded-lg bg-[#18250d] px-4 py-2 text-lime-400"
            >
              Workouts
            </a>

            <a
              href="#"
              className="px-4 py-2 text-gray-400"
            >
              My Plan
            </a>

            <div className="border-t border-gray-800 pt-3 text-sm text-gray-400">
              Plan{" "}
              <span className="text-lime-400">
                0
              </span>

              <span className="ml-5">
                Saved{" "}
                <span className="text-gray-300">
                  0
                </span>
              </span>
            </div>

          </div>

        </div>
      )}
    </header>
  );
}