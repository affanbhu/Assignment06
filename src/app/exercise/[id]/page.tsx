"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function ExerciseDetails() {
  const params = useParams();
  const id = Number(params.id);

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [planCount, setPlanCount] = useState(0);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => response.json())
      .then((data) => {
        const selectedExercise = data.find(
          (item: Exercise) => item.id === id
        );

        setExercise(selectedExercise || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load exercise:", error);
        setLoading(false);
      });

    const updatePlanCount = () => {
      const existingPlan: Exercise[] = JSON.parse(
        localStorage.getItem("todayPlan") || "[]"
      );

      setPlanCount(existingPlan.length);
    };

    updatePlanCount();

    window.addEventListener("planUpdated", updatePlanCount);
    window.addEventListener("focus", updatePlanCount);

    return () => {
      window.removeEventListener("planUpdated", updatePlanCount);
      window.removeEventListener("focus", updatePlanCount);
    };
  }, [id]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = () => {
    if (!exercise) return;

    const existingPlan: Exercise[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    const alreadyAdded = existingPlan.some(
      (item) => item.id === exercise.id
    );

    if (alreadyAdded) {
      showToast("Already in today's plan");
      return;
    }

    // MAXIMUM 5 WORKOUTS
    if (existingPlan.length >= 5) {
      showToast("Today's plan is full (5/5)");
      setPlanCount(5);
      return;
    }

    const updatedPlan = [...existingPlan, exercise];

    localStorage.setItem("todayPlan", JSON.stringify(updatedPlan));

    setPlanCount(updatedPlan.length);

    window.dispatchEvent(new Event("planUpdated"));

    showToast("Added to today's plan");
  };

  const saveForLater = () => {
    if (!exercise) return;

    const savedExercises: Exercise[] = JSON.parse(
      localStorage.getItem("savedExercises") || "[]"
    );

    const alreadySaved = savedExercises.some(
      (item) => item.id === exercise.id
    );

    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    const updatedSaved = [...savedExercises, exercise];

    localStorage.setItem(
      "savedExercises",
      JSON.stringify(updatedSaved)
    );

    window.dispatchEvent(new Event("savedUpdated"));

    showToast("Saved for later");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#191a1c] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>

          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            Loading workout...
          </p>
        </div>
      </main>
    );
  }

  if (!exercise) {
    return (
      <main className="min-h-screen bg-[#191a1c] px-6 py-16 text-center">
        <h1 className="text-2xl font-black uppercase text-white">
          Workout Not Found
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-black uppercase text-black"
        >
          Back to Library
        </Link>
      </main>
    );
  }

  const planIsFull = planCount >= 5;

  return (
    <main className="min-h-screen bg-[#191a1c] px-6 py-8">
      <div className="mx-auto max-w-[1120px]">

        {/* TOAST */}
        {toast && (
          <div className="fixed right-5 top-5 z-50 rounded-lg border border-lime-400/30 bg-[#16181d] px-5 py-3 text-sm font-bold text-lime-400 shadow-lg">
            ✓ {toast}
          </div>
        )}

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-bold uppercase tracking-wide text-lime-400 hover:text-lime-300"
        >
          ← Back to Library
        </Link>

        {/* MAIN CARD */}
        <div className="grid overflow-hidden rounded-xl border border-[#292c31] bg-[#16181d] md:grid-cols-2">

          {/* IMAGE */}
          <div className="min-h-[400px] w-full overflow-hidden md:min-h-[650px]">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

            {/* TITLE */}
            <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {exercise.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {exercise.description}
            </p>

            {/* MUSCLE GROUPS */}
            <div className="mt-5 flex flex-wrap gap-2">
              {exercise.muscleGroups.map((group, index) => (
                <span
                  key={`${group}-${index}`}
                  className="rounded-full bg-lime-400 px-3 py-1 text-[9px] font-black uppercase tracking-wide text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* KEY SPECS */}
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                Key Specs
              </h2>

              <div className="overflow-hidden rounded-lg border border-[#292c31]">

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Equipment
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.equipment}
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Difficulty
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.difficulty}
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Sets
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.sets}
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Reps
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.reps}
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Duration
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.duration} min
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Calories
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.caloriesBurned} kcal
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Rating
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    ⭐ {exercise.rating}
                  </div>
                </div>

              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-8">
              <h2 className="text-xl font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-4">
                {exercise.instructions.slice(0, 4).map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-400"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <span className="pt-0.5">
                        {instruction}
                      </span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* ADD TO PLAN */}
              <button
                onClick={addToPlan}
                disabled={planIsFull}
                className={`flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-black uppercase tracking-wide transition ${
                  planIsFull
                    ? "cursor-not-allowed bg-gray-600 text-gray-300"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                <span>{planIsFull ? "✓" : "＋"}</span>
                {planIsFull
                  ? "Plan Full (5/5)"
                  : "Add to Today's Plan"}
              </button>

              {/* SAVE FOR LATER */}
              <button
                onClick={saveForLater}
                className="flex items-center justify-center gap-2 rounded-md border border-[#3a3d42] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <span>♡</span>
                Save for Later
              </button>

            </div>

            {/* PLAN COUNT */}
            <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-gray-600">
              Today&apos;s plan: {planCount}/5 lifts
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}