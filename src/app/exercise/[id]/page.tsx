// import Link from "next/link";

// const exercises = [
//   {
//     id: 1,
//     name: "Barbell Bench Press",
//     category: "Barbell, Bench",
//     tags: ["CHEST", "ARMS"],
//     time: "25 min",
//     calories: "180 kcal",
//     rating: "4.8",
//     image: "/bench press.jpg",
//     description:
//       "A classic upper-body strength exercise that targets the chest, shoulders, and triceps.",
//   },
//   {
//     id: 2,
//     name: "Pull-Up",
//     category: "Pull-Up Bar",
//     tags: ["BACK", "ARMS"],
//     time: "15 min",
//     calories: "120 kcal",
//     rating: "4.7",
//     image: "/pull up.jpg",
//     description:
//       "A bodyweight pulling exercise that builds strength in the back and arms.",
//   },
//   {
//     id: 3,
//     name: "Back Squat",
//     category: "Barbell, Rack",
//     tags: ["LEGS", "CORE"],
//     time: "30 min",
//     calories: "240 kcal",
//     rating: "4.9",
//     image: "/squat.jpg",
//     description:
//       "A compound lower-body exercise that works the legs, glutes, and core.",
//   },
//   {
//     id: 4,
//     name: "Overhead Press",
//     category: "Barbell",
//     tags: ["SHOULDERS", "ARMS"],
//     time: "20 min",
//     calories: "150 kcal",
//     rating: "4.7",
//     image: "/overhead press.jpg",
//     description:
//       "An upper-body pressing movement focused mainly on the shoulders and arms.",
//   },
//   {
//     id: 5,
//     name: "Dumbbell Bicep Curl",
//     category: "Dumbbells",
//     tags: ["ARMS"],
//     time: "12 min",
//     calories: "80 kcal",
//     rating: "4.3",
//     image: "/bicep curl.jpg",
//     description:
//       "A simple isolation exercise designed to strengthen and develop the biceps.",
//   },
//   {
//     id: 6,
//     name: "Dumbbell Bicep Curl",
//     category: "Dumbbells",
//     tags: ["ARMS"],
//     time: "12 min",
//     calories: "80 kcal",
//     rating: "4.3",
//     image: "/bicep curl.jpg",
//     description:
//       "A simple isolation exercise designed to strengthen and develop the biceps.",
//   },
//   {
//     id: 7,
//     name: "Hollow Body Plank",
//     category: "Bodyweight",
//     tags: ["CORE"],
//     time: "10 min",
//     calories: "60 kcal",
//     rating: "4.4",
//     image: "/plank.jpg",
//     description:
//       "A core-focused bodyweight exercise that develops stability and abdominal strength.",
//   },
//   {
//     id: 8,
//     name: "Dumbbell Bicep Curl",
//     category: "Dumbbells",
//     tags: ["ARMS"],
//     time: "12 min",
//     calories: "80 kcal",
//     rating: "4.3",
//     image: "/bicep curl.jpg",
//     description:
//       "A simple isolation exercise designed to strengthen and develop the biceps.",
//   },
//   {
//     id: 9,
//     name: "Conventional Deadlift",
//     category: "Barbell",
//     tags: ["BACK", "LEGS"],
//     time: "28 min",
//     calories: "260 kcal",
//     rating: "4.9",
//     image: "/deadlift.jpg",
//     description:
//       "A powerful compound movement that trains the posterior chain, including the back and legs.",
//   },
//   {
//     id: 10,
//     name: "Push-Up",
//     category: "Bodyweight",
//     tags: ["CHEST", "ARMS", "CORE"],
//     time: "10 min",
//     calories: "90 kcal",
//     rating: "4.5",
//     image: "/push up.jpg",
//     description:
//       "A classic bodyweight exercise that targets the chest, arms, shoulders, and core.",
//   },
//   {
//     id: 11,
//     name: "Walking Lunge",
//     category: "Dumbbells Optional",
//     tags: ["LEGS"],
//     time: "18 min",
//     calories: "170 kcal",
//     rating: "4.4",
//     image: "/lunges.jpg",
//     description:
//       "A dynamic leg exercise that works the quads, hamstrings, glutes, and calves.",
//   },
//   {
//     id: 12,
//     name: "Russian Twist",
//     category: "Bodyweight",
//     tags: ["CORE", "ABS"],
//     time: "12 min",
//     calories: "100 kcal",
//     rating: "4.5",
//     image: "/russian twist.jpg",
//     description:
//       "A rotational core exercise that targets the abdominal and oblique muscles.",
//   },
// ];

// export default async function ExerciseDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   const exercise = exercises.find(
//     (item) => item.id === Number(id)
//   );

//   if (!exercise) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-4 text-white">
//         <div className="text-center">
//           <h1 className="text-2xl font-black uppercase sm:text-3xl">
//             Exercise Not Found
//           </h1>

//           <Link
//             href="/"
//             className="mt-5 inline-block rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-black"
//           >
//             Back to Workouts
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#191a1c] text-white">
//       <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

//         {/* Navbar */}
//         <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
//           <div className="flex min-h-14 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

//             <Link href="/" className="flex shrink-0 items-center gap-2">
//               <span className="text-xl text-lime-400">⚒</span>

//               <span className="text-sm font-extrabold tracking-wide">
//                 FITLOG
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden items-center gap-3 sm:flex">
//               <Link
//                 href="/"
//                 className="rounded-full bg-[#18250d] px-5 py-1.5 text-[11px] font-semibold text-lime-400"
//               >
//                 Workouts
//               </Link>

//               <Link
//                 href="/my-plan"
//                 className="px-3 py-1.5 text-[11px] text-gray-400 hover:text-white"
//               >
//                 My Plan
//               </Link>
//             </div>

//             {/* Desktop Counters */}
//             <div className="hidden items-center gap-5 text-[10px] sm:flex">
//               <Link href="/my-plan" className="text-gray-300">
//                 Plan
//               </Link>

//               <Link href="/my-plan" className="text-gray-400">
//                 Saved
//               </Link>
//             </div>

//             {/* Mobile */}
//             <Link
//               href="/"
//               className="rounded-md border border-[#25282d] px-3 py-2 text-[10px] text-gray-400 sm:hidden"
//             >
//               Workouts
//             </Link>
//           </div>
//         </header>

//         {/* Exercise Details */}
//         <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

//           <Link
//             href="/"
//             className="text-[10px] text-gray-500 transition hover:text-lime-400"
//           >
//             ← Back to Workouts
//           </Link>

//           <div className="mt-5 overflow-hidden rounded-xl border border-[#25282d] bg-[#16181d] sm:mt-6">

//             {/* Mobile: 1 column | Tablet/Desktop: 2 columns */}
//             <div className="grid grid-cols-1 md:grid-cols-2">

//               {/* Image */}
//               <div className="h-[260px] sm:h-[350px] md:h-[450px]">
//                 <img
//                   src={exercise.image}
//                   alt={exercise.name}
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Information */}
//               <div className="flex flex-col justify-center p-5 sm:p-7 md:p-8">

//                 <div className="flex flex-wrap gap-2">
//                   {exercise.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full bg-lime-400 px-3 py-1 text-[8px] font-black text-black"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h1 className="mt-4 text-2xl font-black uppercase leading-tight sm:text-3xl md:mt-5 md:text-4xl">
//                   {exercise.name}
//                 </h1>

//                 <p className="mt-2 text-xs text-gray-500">
//                   {exercise.category}
//                 </p>

//                 <p className="mt-5 max-w-md text-xs leading-6 text-gray-400 sm:text-sm">
//                   {exercise.description}
//                 </p>

//                 {/* Stats */}
//                 <div className="mt-6 grid grid-cols-1 gap-4 border-y border-[#25282d] py-5 sm:grid-cols-3 sm:gap-0">

//                   <div>
//                     <p className="text-[9px] text-gray-500">
//                       TIME
//                     </p>

//                     <p className="mt-1 text-sm font-bold">
//                       {exercise.time}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[9px] text-gray-500">
//                       CALORIES
//                     </p>

//                     <p className="mt-1 text-sm font-bold">
//                       {exercise.calories}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[9px] text-gray-500">
//                       RATING
//                     </p>

//                     <p className="mt-1 text-sm font-bold">
//                       ★ {exercise.rating}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Add Button */}
//                 <button className="mt-6 w-full rounded-md bg-lime-400 px-6 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-lime-300 sm:w-fit">
//                   Add to Today&apos;s Plan
//                 </button>

//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Exercise = {
  id: number;
  name: string;
  description: string;
  equipment: string;
  tags: string[];
  difficulty: string;
  sets: string;
  reps: string;
  duration: string;
  calories: string;
  rating: string;
  image: string;
  instructions: string[];
};

const exercises: Exercise[] = [
  {
    id: 1,
    name: "Barbell Bench Press",
    description:
      "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    equipment: "Barbell, Bench",
    tags: ["Chest", "Arms"],
    difficulty: "Intermediate",
    sets: "4",
    reps: "6-8",
    duration: "25 min",
    calories: "180 kcal",
    rating: "4.8",
    image: "/bench press.jpg",
    instructions: [
      "Lie on the bench with your eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a controlled motion without bouncing the bar.",
      "Keep your shoulder blades stable and your back naturally arched.",
    ],
  },
  {
    id: 2,
    name: "Pull-Up",
    description:
      "A bodyweight pulling exercise that develops your back, biceps, and upper-body strength.",
    equipment: "Pull-Up Bar",
    tags: ["Back", "Arms"],
    difficulty: "Intermediate",
    sets: "4",
    reps: "6-10",
    duration: "15 min",
    calories: "120 kcal",
    rating: "4.7",
    image: "/pull up.jpg",
    instructions: [
      "Grip the pull-up bar slightly wider than shoulder width.",
      "Start from a controlled hang with your shoulders engaged.",
      "Pull yourself upward without swinging your body.",
      "Lower yourself slowly to the starting position.",
    ],
  },
  {
    id: 3,
    name: "Back Squat",
    description:
      "A compound lower-body exercise that develops your quadriceps, glutes, and core.",
    equipment: "Barbell, Rack",
    tags: ["Legs", "Core"],
    difficulty: "Advanced",
    sets: "4",
    reps: "6-8",
    duration: "30 min",
    calories: "240 kcal",
    rating: "4.9",
    image: "/squat.jpg",
    instructions: [
      "Position the bar securely across your upper back.",
      "Stand with your feet about shoulder-width apart.",
      "Bend your hips and knees while keeping your torso controlled.",
      "Drive through your feet to return to standing.",
    ],
  },
  {
    id: 4,
    name: "Overhead Press",
    description:
      "A shoulder-focused pressing exercise that also trains your triceps and core.",
    equipment: "Barbell",
    tags: ["Shoulders", "Arms"],
    difficulty: "Intermediate",
    sets: "4",
    reps: "8-10",
    duration: "20 min",
    calories: "150 kcal",
    rating: "4.7",
    image: "/overhead press.jpg",
    instructions: [
      "Stand with your feet shoulder-width apart.",
      "Hold the bar at shoulder height.",
      "Press the bar overhead while keeping your core braced.",
      "Lower the bar under control.",
    ],
  },
  {
    id: 5,
    name: "Dumbbell Bicep Curl",
    description:
      "An isolation exercise that targets the biceps and helps develop arm strength.",
    equipment: "Dumbbells",
    tags: ["Arms"],
    difficulty: "Beginner",
    sets: "3",
    reps: "10-12",
    duration: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    instructions: [
      "Stand tall with a dumbbell in each hand.",
      "Keep your elbows close to your torso.",
      "Curl the weights toward your shoulders without swinging.",
      "Lower the dumbbells slowly.",
    ],
  },
  {
    id: 6,
    name: "Dumbbell Bicep Curl",
    description:
      "A dumbbell exercise for building stronger biceps through controlled repetitions.",
    equipment: "Dumbbells",
    tags: ["Arms"],
    difficulty: "Beginner",
    sets: "3",
    reps: "10-12",
    duration: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    instructions: [
      "Stand tall and hold the dumbbells by your sides.",
      "Keep your elbows close to your body.",
      "Curl the dumbbells without swinging your upper arms.",
      "Return to the starting position slowly.",
    ],
  },
  {
    id: 7,
    name: "Hollow Body Plank",
    description:
      "A core-strengthening bodyweight exercise that develops abdominal control and stability.",
    equipment: "Bodyweight",
    tags: ["Core"],
    difficulty: "Intermediate",
    sets: "3",
    reps: "30-45 sec",
    duration: "10 min",
    calories: "60 kcal",
    rating: "4.4",
    image: "/plank.jpg",
    instructions: [
      "Lie on your back and brace your abdominal muscles.",
      "Lift your shoulders and legs into a controlled hollow position.",
      "Keep your lower back pressed toward the floor.",
      "Hold the position while breathing steadily.",
    ],
  },
  {
    id: 8,
    name: "Dumbbell Bicep Curl",
    description:
      "A focused arm exercise that targets the biceps with controlled dumbbell movements.",
    equipment: "Dumbbells",
    tags: ["Arms"],
    difficulty: "Beginner",
    sets: "3",
    reps: "10-12",
    duration: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    instructions: [
      "Hold a dumbbell in each hand.",
      "Keep your elbows close to your torso.",
      "Raise the dumbbells toward your shoulders.",
      "Lower the weights slowly and repeat.",
    ],
  },
  {
    id: 9,
    name: "Conventional Deadlift",
    description:
      "A compound lifting exercise that develops posterior-chain strength and grip.",
    equipment: "Barbell",
    tags: ["Back", "Legs"],
    difficulty: "Advanced",
    sets: "4",
    reps: "5-8",
    duration: "28 min",
    calories: "260 kcal",
    rating: "4.9",
    image: "/deadlift.jpg",
    instructions: [
      "Stand with the bar over the middle of your feet.",
      "Hinge at your hips and grip the bar securely.",
      "Brace your core and lift while keeping the bar close.",
      "Lower the bar under control.",
    ],
  },
  {
    id: 10,
    name: "Push-Up",
    description:
      "A bodyweight pushing exercise that trains your chest, triceps, shoulders, and core.",
    equipment: "Bodyweight",
    tags: ["Chest", "Arms", "Core"],
    difficulty: "Beginner",
    sets: "3",
    reps: "10-15",
    duration: "10 min",
    calories: "90 kcal",
    rating: "4.5",
    image: "/push up.jpg",
    instructions: [
      "Start in a plank position with your hands under your shoulders.",
      "Keep your body in a straight line.",
      "Lower your chest toward the floor.",
      "Push through your hands to return to the starting position.",
    ],
  },
  {
    id: 11,
    name: "Walking Lunge",
    description:
      "A unilateral lower-body exercise that trains your quadriceps, glutes, and balance.",
    equipment: "Dumbbells Optional",
    tags: ["Legs"],
    difficulty: "Beginner",
    sets: "3",
    reps: "10 each leg",
    duration: "18 min",
    calories: "170 kcal",
    rating: "4.4",
    image: "/lunges.jpg",
    instructions: [
      "Stand upright with your feet hip-width apart.",
      "Step forward and bend both knees into a comfortable lunge.",
      "Keep your front knee aligned with your foot.",
      "Push through your front foot and step forward.",
    ],
  },
  {
    id: 12,
    name: "Russian Twist",
    description:
      "A rotational core exercise that challenges abdominal control and trunk stability.",
    equipment: "Bodyweight",
    tags: ["Core", "Abs"],
    difficulty: "Intermediate",
    sets: "3",
    reps: "12 each side",
    duration: "12 min",
    calories: "100 kcal",
    rating: "4.5",
    image: "/russian twist.jpg",
    instructions: [
      "Sit on the floor with your knees bent.",
      "Lean back slightly while keeping your torso controlled.",
      "Rotate your torso from side to side.",
      "Move deliberately without swinging your arms.",
    ],
  },
];

export default function ExerciseDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const exercise = exercises.find((item) => item.id === id);

  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!exercise) return;

    const plan: number[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    const savedList: number[] = JSON.parse(
      localStorage.getItem("savedExercises") || "[]"
    );

    setAdded(plan.includes(exercise.id));
    setSaved(savedList.includes(exercise.id));
  }, [exercise]);

  function addToPlan() {
    if (!exercise) return;

    const plan: number[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    if (!plan.includes(exercise.id)) {
      plan.push(exercise.id);
    }

    localStorage.setItem("todayPlan", JSON.stringify(plan));
    setAdded(true);
  }

  function toggleSaved() {
    if (!exercise) return;

    const savedList: number[] = JSON.parse(
      localStorage.getItem("savedExercises") || "[]"
    );

    const updated = savedList.includes(exercise.id)
      ? savedList.filter((item) => item !== exercise.id)
      : [...savedList, exercise.id];

    localStorage.setItem("savedExercises", JSON.stringify(updated));
    setSaved(updated.includes(exercise.id));
  }

  if (!exercise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-black">Exercise not found</h1>
          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-lime-400 px-5 py-3 font-bold text-black"
          >
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  const details = [
    ["Equipment", exercise.equipment],
    ["Difficulty", exercise.difficulty],
    ["Sets", exercise.sets],
    ["Reps", exercise.reps],
    ["Duration", exercise.duration],
    ["Calories", exercise.calories],
    ["Rating", exercise.rating],
  ];

  return (
    <main className="min-h-screen bg-[#1f1f1f] px-4 py-6 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-4">
          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-lime-400"
          >
            ← Back to Library
          </Link>

          <h1 className="mt-2 text-2xl font-medium text-gray-300">
            Details Page
          </h1>
        </div>

        <div className="bg-[#0d0f14]">
          {/* NAVIGATION */}
          <header className="flex min-h-14 items-center justify-between border-b border-[#22252c] px-5 py-3">
            <Link href="/" className="text-lg font-black tracking-tight">
              <span className="mr-2 text-lime-400">ϟ</span>
              FITLOG
            </Link>

            <nav className="flex gap-5 text-xs text-gray-300">
              <Link href="/" className="hover:text-lime-400">
                Workouts
              </Link>
              <Link href="/#library" className="hover:text-lime-400">
                My Plan
              </Link>
            </nav>

            <div className="hidden gap-4 text-xs text-gray-400 sm:flex">
              <span>
                Plan{" "}
                <span className="rounded-full bg-lime-400 px-1.5 text-black">
                  ✓
                </span>
              </span>
              <span>Saved {saved ? "1" : "0"}</span>
            </div>
          </header>

          {/* EXERCISE DETAILS */}
          <section className="border-4 border-sky-500 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-[350px] w-full object-cover sm:h-[480px] lg:h-[515px]"
                />
              </div>

              {/* INFORMATION */}
              <div className="min-w-0">
                <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                  {exercise.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {exercise.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exercise.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DETAILS TABLE */}
                <div className="mt-6 overflow-hidden rounded-xl border border-[#292c35] bg-[#171a22]">
                  {details.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex min-h-[43px] items-center justify-between gap-4 border-b border-[#252832] px-4 py-3 last:border-b-0"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {label}
                      </span>

                      <span className="text-right text-xs text-gray-100">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* INSTRUCTIONS */}
                <div className="mt-7">
                  <h3 className="text-sm font-black uppercase tracking-wide">
                    Instructions
                  </h3>

                  <ol className="mt-4 space-y-3">
                    {exercise.instructions.map((instruction, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-xs leading-5 text-gray-300"
                      >
                        <span className="shrink-0 text-gray-500">
                          {index + 1}.
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* BUTTONS */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    onClick={addToPlan}
                    className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
                  >
                    {added ? "✓ Added to Today's Plan" : "▦ Add to Today's Plan"}
                  </button>

                  <button
                    onClick={toggleSaved}
                    className="rounded-lg border border-[#343844] px-5 py-3 text-sm text-gray-200 transition hover:border-lime-400 hover:text-lime-400"
                  >
                    {saved ? "✓ Saved" : "♧ Save for Later"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="flex flex-col items-center justify-between gap-3 border-t border-[#22252c] px-5 py-5 text-xs text-gray-500 sm:flex-row">
            <Link href="/" className="font-black text-white">
              <span className="mr-2 text-lime-400">ϟ</span>
              FITLOG
            </Link>

            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}