"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Exercise = {
  id: number;
  name: string;
  description: string;
  equipment: string;
  muscleGroups: string[];
  difficulty: string;
  sets: number;
  reps: number;
  duration: number;
  caloriesBurned: number;
  rating: number;
  image: string;
  instructions: string[];
};

export default function MyPlan() {
  const [todayPlan, setTodayPlan] = useState<Exercise[]>([]);
  const [savedExercises, setSavedExercises] = useState<Exercise[]>([]);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  /* ================= LOAD DATA ================= */

  const loadData = () => {
    const plan: Exercise[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    const saved: Exercise[] = JSON.parse(
      localStorage.getItem("savedExercises") || "[]"
    );

    const completed: number[] = JSON.parse(
      localStorage.getItem("completedExercises") || "[]"
    );

    setTodayPlan(plan);
    setSavedExercises(saved);
    setCompletedIds(completed);

    setLoading(false);
  };

  useEffect(() => {
    // Show loading state briefly before rendering the list
    const timer = setTimeout(() => {
      loadData();
    }, 400);

    const handleUpdate = () => {
      loadData();
    };

    window.addEventListener("planUpdated", handleUpdate);
    window.addEventListener("savedUpdated", handleUpdate);
    window.addEventListener("focus", handleUpdate);

    return () => {
      clearTimeout(timer);

      window.removeEventListener("planUpdated", handleUpdate);
      window.removeEventListener("savedUpdated", handleUpdate);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  /* ================= TOAST ================= */

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* ================= REMOVE ================= */

  const removeFromPlan = (id: number) => {
    const updatedPlan = todayPlan.filter(
      (exercise) => exercise.id !== id
    );

    localStorage.setItem(
      "todayPlan",
      JSON.stringify(updatedPlan)
    );

    setTodayPlan(updatedPlan);

    window.dispatchEvent(new Event("planUpdated"));

    showToast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    const updatedSaved = savedExercises.filter(
      (exercise) => exercise.id !== id
    );

    localStorage.setItem(
      "savedExercises",
      JSON.stringify(updatedSaved)
    );

    setSavedExercises(updatedSaved);

    window.dispatchEvent(new Event("savedUpdated"));

    showToast("Removed from saved");
  };

  /* ================= MARK AS DONE ================= */

  const markAsDone = (id: number) => {
    let updatedCompleted: number[];

    if (completedIds.includes(id)) {
      updatedCompleted = completedIds.filter(
        (exerciseId) => exerciseId !== id
      );

      showToast("Marked as not done");
    } else {
      updatedCompleted = [...completedIds, id];

      showToast("Workout marked as done");
    }

    localStorage.setItem(
      "completedExercises",
      JSON.stringify(updatedCompleted)
    );

    setCompletedIds(updatedCompleted);
  };

  /* ================= CURRENT LIST ================= */

  const activeExercises =
    activeTab === "plan" ? todayPlan : savedExercises;

  /* ================= METRICS ================= */

  const totalMinutes = todayPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0c0e] text-white">
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Loading workouts…
          </p>
        </div>
      </main>
    );
  }

  /* ================= PAGE ================= */

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">

      {/* TOAST */}
      {toast && (
        <div className="fixed right-5 top-5 z-50 rounded-lg border border-lime-400/30 bg-[#16181d] px-5 py-3 text-sm font-bold text-lime-400 shadow-lg">
          {toast}
        </div>
      )}

      <div className="mx-auto min-h-screen max-w-[1200px]">

        <section className="px-4 py-8 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}

          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              MY PLAN
            </h1>

            <p className="mt-2 text-[10px] leading-5 text-gray-500 sm:text-[11px]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* ================= METRICS ================= */}

          <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-[#25282d] bg-[#121419] sm:grid-cols-3">

            {/* EXERCISES */}

            <div className="border-b border-[#25282d] px-5 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-black text-lime-400">
                {todayPlan.length}
              </p>
            </div>

            {/* MINUTES */}

            <div className="border-b border-[#25282d] px-5 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-black text-white">
                {totalMinutes}
              </p>
            </div>

            {/* CALORIES */}

            <div className="px-5 py-5">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Calories
              </p>

              <p className="mt-2 text-3xl font-black text-white">
                {totalCalories}
              </p>
            </div>

          </div>

          {/* ================= TABS ================= */}

          <div className="mt-6 flex w-fit rounded-lg border border-[#25282d] bg-[#121419] p-1">

            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-5 py-2 text-[9px] font-bold uppercase transition ${
                activeTab === "plan"
                  ? "bg-[#252a31] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-5 py-2 text-[9px] font-bold uppercase transition ${
                activeTab === "saved"
                  ? "bg-[#252a31] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* ================= EMPTY STATE ================= */}

          {activeExercises.length === 0 ? (
            <div className="mt-5 flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-[#25282d] bg-[#0d0f12] px-5 py-10">

              <div className="text-center">

                <h2 className="text-sm font-black uppercase tracking-wide text-white">
                  NOTHING HERE YET
                </h2>

                <p className="mx-auto mt-2 max-w-sm text-[10px] leading-5 text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-2.5 text-[9px] font-black uppercase text-black transition hover:bg-lime-300"
                >
                  Go to workouts
                </Link>

              </div>

            </div>
          ) : (

            /* ================= WORKOUT CARDS ================= */

            <div className="mt-5 space-y-3">

              {activeExercises.map((exercise) => {
                const isDone = completedIds.includes(exercise.id);

                return (
                  <div
                    key={exercise.id}
                    className={`overflow-hidden rounded-xl border bg-[#121419] transition ${
                      isDone
                        ? "border-lime-400/30 opacity-70"
                        : "border-[#25282d]"
                    }`}
                  >

                    <div className="flex flex-col sm:flex-row">

                      {/* THUMBNAIL */}

                      <div className="h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[220px]">
                        <img
                          src={exercise.image}
                          alt={exercise.name}
                          className={`h-full w-full object-cover ${
                            isDone ? "grayscale" : ""
                          }`}
                        />
                      </div>

                      {/* CONTENT */}

                      <div className="flex flex-1 flex-col justify-between p-5">

                        {/* TITLE + EQUIPMENT */}

                        <div>

                          <div className="flex items-start justify-between gap-4">

                            <div>
                              <h2
                                className={`text-lg font-black uppercase ${
                                  isDone
                                    ? "text-gray-500 line-through"
                                    : "text-white"
                                }`}
                              >
                                {exercise.name}
                              </h2>

                              <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                {exercise.equipment}
                              </p>
                            </div>

                            {isDone && (
                              <span className="shrink-0 rounded-full bg-lime-400 px-2 py-1 text-[8px] font-black uppercase text-black">
                                Done
                              </span>
                            )}

                          </div>

                          {/* STATS */}

                          <div className="mt-4 flex flex-wrap items-center gap-4">

                            <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
                              <span>◷</span>
                              {exercise.duration} min
                            </span>

                            <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
                              <span>🔥</span>
                              {exercise.caloriesBurned} kcal
                            </span>

                            <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
                              <span>★</span>
                              {exercise.rating}
                            </span>

                          </div>

                        </div>

                        {/* ACTION BUTTONS */}

                        <div className="mt-5 flex flex-col gap-2 sm:flex-row">

                          {/* VIEW DETAILS */}

                          <Link
                            href={`/exercise/${exercise.id}`}
                            className="flex flex-1 items-center justify-center rounded-md bg-lime-400 px-4 py-3 text-[9px] font-black uppercase text-black transition hover:bg-lime-300"
                          >
                            View Details
                          </Link>

                          {/* MARK AS DONE */}

                          {activeTab === "plan" && (
                            <button
                              onClick={() =>
                                markAsDone(exercise.id)
                              }
                              className={`flex-1 rounded-md border px-4 py-3 text-[9px] font-black uppercase transition ${
                                isDone
                                  ? "border-lime-400 text-lime-400"
                                  : "border-[#3a3d42] text-gray-400 hover:border-lime-400 hover:text-lime-400"
                              }`}
                            >
                              {isDone
                                ? "Done"
                                : "Mark as Done"}
                            </button>
                          )}

                          {/* REMOVE */}

                          <button
                            onClick={() =>
                              activeTab === "plan"
                                ? removeFromPlan(exercise.id)
                                : removeFromSaved(exercise.id)
                            }
                            aria-label={`Remove ${exercise.name}`}
                            className="flex h-[42px] w-full items-center justify-center rounded-md border border-[#3a3d42] px-4 text-lg text-gray-500 transition hover:border-red-400 hover:text-red-400 sm:w-[46px]"
                          >
                            ×
                          </button>

                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          )}

        </section>
      </div>
    </main>
  );
}