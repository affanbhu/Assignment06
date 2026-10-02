// export default function MyPlan() {
//   return (
//     <div className="min-h-screen bg-black px-6 py-10 text-white">
//       <h1 className="text-3xl font-black uppercase">
//         My Plan
//       </h1>

//       <p className="mt-2 text-sm text-gray-500">
//         Your selected workouts will appear here.
//       </p>
//     </div>
//   );
// } 
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyPlan() {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const plan: number[] = JSON.parse(
        localStorage.getItem("todayPlan") || "[]"
      );

      const saved: number[] = JSON.parse(
        localStorage.getItem("savedExercises") || "[]"
      );

      setPlanCount(plan.length);
      setSavedCount(saved.length);
    };

    updateCounts();

    window.addEventListener("storage", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-[1200px]">

        <h1 className="text-3xl font-black uppercase">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Your selected workouts will appear here.
        </p>

        {/* COUNTERS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Today's Plan */}
          <Link
            href="/my-plan"
            className="rounded-xl border border-[#25282d] bg-[#121419] p-6 transition hover:border-lime-400"
          >
            <p className="text-sm text-gray-500">
              Today&apos;s Plan
            </p>

            <p className="mt-2 text-4xl font-black text-lime-400">
              {planCount}
            </p>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="rounded-xl border border-[#25282d] bg-[#121419] p-6 transition hover:border-lime-400"
          >
            <p className="text-sm text-gray-500">
              Saved
            </p>

            <p className="mt-2 text-4xl font-black text-white">
              {savedCount}
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}