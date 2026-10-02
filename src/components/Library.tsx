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
  },
];

export default function Library() {
  return (
    <section id="library" className="px-6 pb-12 pt-2">
      <div className="mx-auto max-w-[1120px]">
        {/* SECTION HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            The Library
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Twelve exercises covering every major muscle group.
          </p>
        </div>

        {/* EXERCISE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <Link
              key={exercise.id}
              href={`/exercise/${exercise.id}`}
              className="block"
            >
              <article className="h-full overflow-hidden rounded-xl border border-[#292c31] bg-[#16181d] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60">
                {/* EXERCISE IMAGE */}
                <div className="h-[220px] w-full overflow-hidden bg-[#16181d]">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                  />
                </div>

                {/* EXERCISE DETAILS */}
                <div className="p-4">
                  {/* MUSCLE TAGS */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {exercise.tags.map((tag, index) => (
                      <span
                        key={`${exercise.id}-${tag}-${index}`}
                        className="rounded-full bg-lime-400 px-2.5 py-1 text-[8px] font-black text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* EXERCISE NAME */}
                  <h3 className="text-sm font-black uppercase tracking-wide text-white">
                    {exercise.name}
                  </h3>

                  {/* EQUIPMENT */}
                  <p className="mt-1 text-[10px] text-gray-500">
                    {exercise.category}
                  </p>

                  <div className="my-3 border-t border-[#25282d]" />

                  {/* TIME, CALORIES, RATING */}
                  <div className="flex flex-wrap items-center gap-4 text-[9px] text-gray-400">
                    <span>◷ {exercise.time}</span>
                    <span>● {exercise.calories}</span>
                    <span>☆ {exercise.rating}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}