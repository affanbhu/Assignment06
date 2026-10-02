
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
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#191a1c] px-6 py-16 text-center text-gray-400">
        Loading workout...
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

  const addToPlan = () => {
    const existingPlan = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    const alreadyAdded = existingPlan.some(
      (item: Exercise) => item.id === exercise.id
    );

    if (!alreadyAdded) {
      localStorage.setItem(
        "todayPlan",
        JSON.stringify([...existingPlan, exercise])
      );

      alert("Added to Today's Plan");
    } else {
      alert("Already in Today's Plan");
    }
  };

  const saveForLater = () => {
    const savedExercises = JSON.parse(
      localStorage.getItem("savedExercises") || "[]"
    );

    const alreadySaved = savedExercises.some(
      (item: Exercise) => item.id === exercise.id
    );

    if (!alreadySaved) {
      localStorage.setItem(
        "savedExercises",
        JSON.stringify([...savedExercises, exercise])
      );

      alert("Saved for Later");
    } else {
      alert("Already Saved");
    }
  };

  return (
    <main className="min-h-screen bg-[#191a1c] px-6 py-8">
      <div className="mx-auto max-w-[1120px]">

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-bold uppercase tracking-wide text-lime-400 hover:text-lime-300"
        >
          ← Back to Library
        </Link>

        {/* MAIN TWO-COLUMN CARD */}
        <div className="grid overflow-hidden rounded-xl border border-[#292c31] bg-[#16181d] md:grid-cols-2">

          {/* ================= LEFT SIDE - IMAGE ================= */}
          <div className="min-h-[400px] w-full overflow-hidden md:min-h-[650px]">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* ================= RIGHT SIDE - CONTENT ================= */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

            {/* TITLE */}
            <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {exercise.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {exercise.description}
            </p>

            {/* CATEGORY TAGS */}
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

                {/* EQUIPMENT */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Equipment
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.equipment}
                  </div>
                </div>

                {/* DIFFICULTY */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Difficulty
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.difficulty}
                  </div>
                </div>

                {/* SETS */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Sets
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.sets}
                  </div>
                </div>

                {/* REPS */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Reps
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.reps}
                  </div>
                </div>

                {/* DURATION */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Duration
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.duration} min
                  </div>
                </div>

                {/* CALORIES */}
                <div className="grid grid-cols-2 border-b border-[#292c31]">
                  <div className="p-3 text-[9px] font-bold uppercase text-gray-500">
                    Calories
                  </div>

                  <div className="p-3 text-right text-sm font-bold text-white">
                    {exercise.caloriesBurned} kcal
                  </div>
                </div>

                {/* RATING */}
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
                {exercise.instructions
                  .slice(0, 4)
                  .map((instruction, index) => (
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
                  ))}
              </ol>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* ADD TO PLAN */}
              <button
                onClick={addToPlan}
                className="flex items-center justify-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
              >
                <span>＋</span>
                Add to Today&apos;s Plan
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
          </div>
        </div>
      </div>
    </main>
  );
}