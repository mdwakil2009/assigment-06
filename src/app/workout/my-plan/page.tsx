"use client";
import MyPlanCard from "@/components/shared/MyPlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import { oswald } from "@/lib/font";
import Link from "next/link";
import { useContext, useState } from "react";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";

const MyPlan = () => {
  const { plan, saved } = useContext(WorkoutContext);
  const [sortBy , setSortBy]= useState <"duration"| "calories"|"rating" >("rating") 


  const sortWorkoutData = (library:IWorkoutLibrary[])=>{
    const sortedWorkoutData =[...library]

    if(sortBy === "duration"){
      sortedWorkoutData.sort((a,b)=> b.duration-a.duration)
    } else if(sortBy === "calories"){
      sortedWorkoutData.sort((a,b) => b.caloriesBurned- a.caloriesBurned)
    } else if (sortBy === "rating"){
      sortedWorkoutData.sort((a,b)=>b.rating- a.rating)
    }
    return sortedWorkoutData

  }
  const sortedPlan = sortWorkoutData(plan)
  const sortedSaved = sortWorkoutData(saved)


  const minutes = plan.reduce((total:number, item:IWorkoutLibrary) => total + item.duration, 0);
  const calories = plan.reduce((total:number, item:IWorkoutLibrary) => total + item.caloriesBurned, 0);
  const [tap, setTab] = useState("today");
  const list = tap === "today" ? sortedPlan : sortedSaved;

  return (
    <div className=" text-white px-4 py-8">
      <div className="  mx-auto max-w-[1200px]  w-full ">
        <h1
          className={`text-3xl md:text-4xl font-semibold ${oswald.className}`}
        >
          MY PLAN
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="grid grid-cols-3 rounded-xl overflow-hidden mb-8 ">
          <div className="bg-[#222630] border-r border-gray-700 p-5">
            <p className="text-gray-400 text-lg mb-2">Exercises</p>
            <h2 className="text-3xl font-bold text-[#C2F800]">{plan.length}</h2>
          </div>

          <div className="bg-[#222630] border-r border-gray-700 p-5">
            <p className="text-gray-400 text-lg mb-2">Minutes</p>
            <h2 className="text-3xl font-bold">{minutes}</h2>
          </div>

          <div className="bg-[#222630]  p-5">
            <p className="text-gray-400 text-lg mb-2">Calories</p>
            <h2 className="text-3xl font-bold">{calories}</h2>
          </div>
        </div>
        
<div className="flex items-center justify-between w-full border-gray-700 mb-6">


  <div className="flex bg-[#222630] rounded-lg p-1 w-fit">
    <button
      onClick={() => setTab("today")}
      className={`px-5 py-2 rounded-md text-sm font-medium ${
        tap === "today"
          ? "text-[#C2F800] bg-[#1e2027]"
          : "text-gray-400"
      }`}
    >
      Today's Plan
    </button>

    <button
      onClick={() => setTab("saved")}
      className={`px-5 py-2 rounded-md text-sm font-medium ${
        tap === "saved"
          ? "text-[#C2F800] bg-[#1e2027]"
          : "text-gray-400"
      }`}
    >
      Saved
    </button>
  </div>


  <div className="flex items-center gap-2">
    <label className="text-sm text-gray-400">
      Sort By
    </label>

    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as "duration"| "calories"|"rating"  )}
      className="border border-gray-600 bg-[#222630] px-3 py-2 rounded-lg text-sm outline-none"
    >
      <option value="duration">Duration</option>
      <option value="calories">Calories</option>
      <option value="rating">Rating</option>
    </select>
  </div>

</div>

        <div className="bg-[#222630] rounded-2xl p-10">
          {list.length > 0 ? (
            list.map((library) => (
              <MyPlanCard key={library.id} workoutlibrary={library} />
            ))
          ) : (
            <div className="text-center">
              <h2 className={`text-xl font-semibold ${oswald.className}`}>
                NOTHING HERE YET
              </h2>

              <p className="text-gray-400 mt-2 mb-6">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="inline-block bg-[#C2F800] text-black font-bold px-6 py-3 rounded-xl"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
