// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Exercise = {
//   id: number;
//   name: string;
//   image: string;
//   muscleGroups: string[];
//   equipment: string;
//   duration: number;
//   caloriesBurned: number;
//   rating: number;
// };

// export default function Library() {
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://api.abcz.workers.dev/api/fitlog")
//       .then((response) => response.json())
//       .then((data) => {
//         setExercises(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Failed to load workouts:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section id="library" className="px-6 pb-12 pt-2">
//       <div className="mx-auto max-w-[1120px]">

//         {/* SECTION TITLE */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-black uppercase tracking-tight text-white">
//             THE LIBRARY
//           </h2>

//           <p className="mt-1 text-xs text-gray-500">
//             Twelve lifts covering every major muscle group.
//           </p>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <p className="py-10 text-center text-sm text-gray-400">
//             Loading workouts...
//           </p>
//         )}

//         {/* WORKOUT GRID */}
//         {!loading && (
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {exercises.map((exercise) => (
//               <Link
//                 key={exercise.id}
//                 href={`/exercise/${exercise.id}`}
//                 className="block"
//               >
//                 <article className="h-full overflow-hidden rounded-xl border border-[#292c31] bg-[#16181d] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60">

//                   {/* IMAGE */}
//                   <div className="h-[220px] w-full overflow-hidden bg-[#16181d]">
//                     <img
//                       src={exercise.image}
//                       alt={exercise.name}
//                       className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-4">

//                     {/* TAGS */}
//                     <div className="mb-3 flex flex-wrap gap-2">
//                       {exercise.muscleGroups.map((group, index) => (
//                         <span
//                           key={`${exercise.id}-${group}-${index}`}
//                           className="rounded-full bg-lime-400 px-2.5 py-1 text-[8px] font-black uppercase text-black"
//                         >
//                           {group}
//                         </span>
//                       ))}
//                     </div>

//                     {/* NAME */}
//                     <h3 className="text-sm font-black uppercase tracking-wide text-white">
//                       {exercise.name}
//                     </h3>

//                     {/* EQUIPMENT */}
//                     <p className="mt-1 text-[10px] text-gray-500">
//                       {exercise.equipment}
//                     </p>

//                     <div className="my-3 border-t border-[#25282d]" />

//                     {/* STATS */}
//                     <div className="flex flex-wrap items-center gap-4 text-[9px] text-gray-400">
//                       <span>◷ {exercise.duration} min</span>
//                       <span>● {exercise.caloriesBurned} kcal</span>
//                       <span>☆ {exercise.rating}</span>
//                     </div>

//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// } 
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Exercise = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

export default function Library() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workouts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="library" className="px-6 pb-12 pt-2">
      <div className="mx-auto max-w-[1120px]">

        {/* SECTION TITLE */}
        <div className="mb-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* LOADING ANIMATION */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>

            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Loading workouts...
            </p>
          </div>
        )}

        {/* WORKOUT GRID */}
        {!loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/exercise/${exercise.id}`}
                className="block"
              >
                <article className="h-full overflow-hidden rounded-xl border border-[#292c31] bg-[#16181d] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60">

                  {/* IMAGE */}
                  <div className="h-[220px] w-full overflow-hidden bg-[#16181d]">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    {/* TAGS */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      {exercise.muscleGroups.map((group, index) => (
                        <span
                          key={`${exercise.id}-${group}-${index}`}
                          className="rounded-full bg-lime-400 px-2.5 py-1 text-[8px] font-black uppercase text-black"
                        >
                          {group}
                        </span>
                      ))}
                    </div>

                    {/* NAME */}
                    <h3 className="text-sm font-black uppercase tracking-wide text-white">
                      {exercise.name}
                    </h3>

                    {/* EQUIPMENT */}
                    <p className="mt-1 text-[10px] text-gray-500">
                      {exercise.equipment}
                    </p>

                    <div className="my-3 border-t border-[#25282d]" />

                    {/* STATS */}
                    <div className="flex flex-wrap items-center gap-4 text-[9px] text-gray-400">
                      <span>◷ {exercise.duration} min</span>
                      <span>● {exercise.caloriesBurned} kcal</span>
                      <span>☆ {exercise.rating}</span>
                    </div>

                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}