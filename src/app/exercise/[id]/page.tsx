import Link from "next/link";

const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    category: "Barbell, Bench",
    tags: ["CHEST", "ARMS"],
    time: "25 min",
    calories: "180 kcal",
    rating: "4.8",
    image: "/bench press.jpg",
    description:
      "A classic upper-body strength exercise that targets the chest, shoulders, and triceps.",
  },
  {
    id: 2,
    name: "Pull-Up",
    category: "Pull-Up Bar",
    tags: ["BACK", "ARMS"],
    time: "15 min",
    calories: "120 kcal",
    rating: "4.7",
    image: "/pull up.jpg",
    description:
      "A bodyweight pulling exercise that builds strength in the back and arms.",
  },
  {
    id: 3,
    name: "Back Squat",
    category: "Barbell, Rack",
    tags: ["LEGS", "CORE"],
    time: "30 min",
    calories: "240 kcal",
    rating: "4.9",
    image: "/squat.jpg",
    description:
      "A compound lower-body exercise that works the legs, glutes, and core.",
  },
  {
    id: 4,
    name: "Overhead Press",
    category: "Barbell",
    tags: ["SHOULDERS", "ARMS"],
    time: "20 min",
    calories: "150 kcal",
    rating: "4.7",
    image: "/overhead press.jpg",
    description:
      "An upper-body pressing movement focused mainly on the shoulders and arms.",
  },
  {
    id: 5,
    name: "Dumbbell Bicep Curl",
    category: "Dumbbells",
    tags: ["ARMS"],
    time: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    description:
      "A simple isolation exercise designed to strengthen and develop the biceps.",
  },
  {
    id: 6,
    name: "Dumbbell Bicep Curl",
    category: "Dumbbells",
    tags: ["ARMS"],
    time: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    description:
      "A simple isolation exercise designed to strengthen and develop the biceps.",
  },
  {
    id: 7,
    name: "Hollow Body Plank",
    category: "Bodyweight",
    tags: ["CORE"],
    time: "10 min",
    calories: "60 kcal",
    rating: "4.4",
    image: "/plank.jpg",
    description:
      "A core-focused bodyweight exercise that develops stability and abdominal strength.",
  },
  {
    id: 8,
    name: "Dumbbell Bicep Curl",
    category: "Dumbbells",
    tags: ["ARMS"],
    time: "12 min",
    calories: "80 kcal",
    rating: "4.3",
    image: "/bicep curl.jpg",
    description:
      "A simple isolation exercise designed to strengthen and develop the biceps.",
  },
  {
    id: 9,
    name: "Conventional Deadlift",
    category: "Barbell",
    tags: ["BACK", "LEGS"],
    time: "28 min",
    calories: "260 kcal",
    rating: "4.9",
    image: "/deadlift.jpg",
    description:
      "A powerful compound movement that trains the posterior chain, including the back and legs.",
  },
  {
    id: 10,
    name: "Push-Up",
    category: "Bodyweight",
    tags: ["CHEST", "ARMS", "CORE"],
    time: "10 min",
    calories: "90 kcal",
    rating: "4.5",
    image: "/push up.jpg",
    description:
      "A classic bodyweight exercise that targets the chest, arms, shoulders, and core.",
  },
  {
    id: 11,
    name: "Walking Lunge",
    category: "Dumbbells Optional",
    tags: ["LEGS"],
    time: "18 min",
    calories: "170 kcal",
    rating: "4.4",
    image: "/lunges.jpg",
    description:
      "A dynamic leg exercise that works the quads, hamstrings, glutes, and calves.",
  },
  {
    id: 12,
    name: "Russian Twist",
    category: "Bodyweight",
    tags: ["CORE", "ABS"],
    time: "12 min",
    calories: "100 kcal",
    rating: "4.5",
    image: "/russian twist.jpg",
    description:
      "A rotational core exercise that targets the abdominal and oblique muscles.",
  },
];

export default async function ExerciseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-4 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-black uppercase sm:text-3xl">
            Exercise Not Found
          </h1>

          <Link
            href="/"
            className="mt-5 inline-block rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-black"
          >
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#191a1c] text-white">
      <div className="mx-auto min-h-screen max-w-[1200px] bg-[#0b0c0e]">

        {/* Navbar */}
        <header className="border-b border-[#1d1f23] bg-[#0b0c0e]">
          <div className="flex min-h-14 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

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
                className="px-3 py-1.5 text-[11px] text-gray-400 hover:text-white"
              >
                My Plan
              </Link>
            </div>

            {/* Desktop Counters */}
            <div className="hidden items-center gap-5 text-[10px] sm:flex">
              <Link href="/my-plan" className="text-gray-300">
                Plan
              </Link>

              <Link href="/my-plan" className="text-gray-400">
                Saved
              </Link>
            </div>

            {/* Mobile */}
            <Link
              href="/"
              className="rounded-md border border-[#25282d] px-3 py-2 text-[10px] text-gray-400 sm:hidden"
            >
              Workouts
            </Link>
          </div>
        </header>

        {/* Exercise Details */}
        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

          <Link
            href="/"
            className="text-[10px] text-gray-500 transition hover:text-lime-400"
          >
            ← Back to Workouts
          </Link>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#25282d] bg-[#16181d] sm:mt-6">

            {/* Mobile: 1 column | Tablet/Desktop: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Image */}
              <div className="h-[260px] sm:h-[350px] md:h-[450px]">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Information */}
              <div className="flex flex-col justify-center p-5 sm:p-7 md:p-8">

                <div className="flex flex-wrap gap-2">
                  {exercise.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lime-400 px-3 py-1 text-[8px] font-black text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="mt-4 text-2xl font-black uppercase leading-tight sm:text-3xl md:mt-5 md:text-4xl">
                  {exercise.name}
                </h1>

                <p className="mt-2 text-xs text-gray-500">
                  {exercise.category}
                </p>

                <p className="mt-5 max-w-md text-xs leading-6 text-gray-400 sm:text-sm">
                  {exercise.description}
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-1 gap-4 border-y border-[#25282d] py-5 sm:grid-cols-3 sm:gap-0">

                  <div>
                    <p className="text-[9px] text-gray-500">
                      TIME
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {exercise.time}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-500">
                      CALORIES
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {exercise.calories}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-500">
                      RATING
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      ★ {exercise.rating}
                    </p>
                  </div>

                </div>

                {/* Add Button */}
                <button className="mt-6 w-full rounded-md bg-lime-400 px-6 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-lime-300 sm:w-fit">
                  Add to Today&apos;s Plan
                </button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}