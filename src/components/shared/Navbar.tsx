"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto w-[calc(100%-32px)] max-w-[1600px] bg-black">
      <div className="relative flex min-h-[58px] items-center border-b border-[#1d1f23] px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-[18px] w-[18px] text-lime-400"
          >
            <path
              d="M5 8L16 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 5L11 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 8L8 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 16L19 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 13L16 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 10L7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17 17L20 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-[13px] font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <a
            href="#"
            className="rounded-full bg-[#18250d] px-4 py-[5px] text-[9px] font-semibold text-lime-400"
          >
            Workouts
          </a>

          <a
            href="#"
            className="px-4 py-[5px] text-[9px] text-gray-500 transition hover:text-white"
          >
            My Plan
          </a>
        </nav>

        {/* Right Side */}
        <div className="ml-auto hidden shrink-0 items-center gap-4 sm:gap-5 md:flex">

          {/* Plan */}
          <div className="flex items-center gap-2 text-[9px] text-gray-300">
            <span>Plan</span>

            <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full bg-lime-400 text-[7px] font-bold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-[9px] text-gray-500">
            <span>Saved</span>

            <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-[#303239] text-[7px] text-gray-500">
              0
            </span>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex items-center justify-center text-xl text-white md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-b border-[#1d1f23] bg-black px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">

            <a
              href="#"
              className="rounded-lg bg-[#18250d] px-4 py-2 text-sm text-lime-400"
            >
              Workouts
            </a>

            <a
              href="#"
              className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-white"
            >
              My Plan
            </a>

            <div className="border-t border-[#1d1f23] pt-3 text-xs text-gray-400">
              <span>
                Plan{" "}
                <span className="ml-1 rounded-full bg-lime-400 px-1.5 py-0.5 text-[8px] font-bold text-black">
                  0
                </span>
              </span>

              <span className="ml-5">
                Saved{" "}
                <span className="ml-1 rounded-full border border-gray-700 px-1.5 py-0.5 text-[8px]">
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