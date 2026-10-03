
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Exercise = {
  id: number;
  name: string;
  image: string;
  equipment: string;
  muscleGroups: string[];
  duration: number;
  caloriesBurned: number;
  rating: number;
};

export default function MyPlan() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const loadPlan = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );
        const data = await response.json();
        const allExercises: Exercise[] = Array.isArray(data)
          ? data
          : data.data || data.exercises || [];

        const ids: number[] = JSON.parse(
          localStorage.getItem("todayPlan") || "[]"
        );

        setExercises(allExercises.filter((exercise) =>
          ids.includes(exercise.id)
        ));

        setCompleted(
          JSON.parse(localStorage.getItem("completedExercises") || "[]")
        );
      } catch (error) {
        console.error("Failed to load workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPlan();
  }, []);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  };

  const markAsDone = (id: number) => {
    const updated = [...completed, id];
    setCompleted(updated);
    localStorage.setItem("completedExercises", JSON.stringify(updated));
    showToast("Workout marked as done!");
  };

  const removeWorkout = (id: number) => {
    const updated = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updated);

    const planIds: number[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );
    localStorage.setItem(
      "todayPlan",
      JSON.stringify(planIds.filter((planId) => planId !== id))
    );

    showToast("Workout removed from your plan");
  };

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-3xl font-black uppercase">My Plan</h1>
        <p className="mt-2 text-sm text-gray-500">
          Your selected workouts will appear here.
        </p>

        {loading ? (
          <div className="py-16 text-center text-gray-400">
            Loading your plan...
          </div>
        ) : exercises.length === 0 ? (
          <div className="mt-10 rounded-xl border border-[#25282d] bg-[#121419] p-8 text-center">
            <p className="text-gray-400">No workouts in your plan yet.</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-lg bg-lime-400 px-5 py-2 font-bold text-black"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => {
              const isDone = completed.includes(exercise.id);

              return (
                <div
                  key={exercise.id}
                  className="overflow-hidden rounded-xl border border-[#25282d] bg-[#121419]"
                >
                  {exercise.image && (
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="p-5">
                    <h2 className="text-xl font-bold">{exercise.name}</h2>
                    <p className="mt-2 text-sm text-gray-400">
                      {exercise.equipment}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                      {exercise.duration} min · {exercise.caloriesBurned} kcal
                    </p>

                    <div className="mt-5 flex gap-2">
                      <button
                        onClick={() => markAsDone(exercise.id)}
                        disabled={isDone}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-lime-400 px-3 py-2 text-sm font-bold text-black disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white"
                      >
                        <span aria-hidden="true">✓</span>
                        {isDone ? "Done" : "Mark as Done"}
                      </button>

                      <button
                        onClick={() => removeWorkout(exercise.id)}
                        aria-label={`Remove ${exercise.name}`}
                        className="rounded-lg border border-red-500 px-4 py-2 font-bold text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-lime-400 px-5 py-3 font-bold text-black shadow-lg"
        >
          {toast}
        </div>
      )}
    </main>
  );
}