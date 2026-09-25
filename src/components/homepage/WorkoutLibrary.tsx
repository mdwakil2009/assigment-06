import { oswald } from "@/lib/font";
import Image from "next/image";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";

const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workoutlibraryData = await getWorkoutLibrary();

  return (
    <div className="text-white max-w-7xl mx-auto mt-10 px-4">
      <div className="mb-8">
        <h2 className={`${oswald.className} font-bold text-3xl`}>
          THE LIBRARY
        </h2>

        <p className="text-[#9CA3AF] mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div id='cards' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutlibraryData.map(
          (workoutlibrary: IWorkoutLibrary, ind: number) => {
            return (
              <WorkoutCard
                key={ind}
                workoutlibrary={workoutlibrary}
              ></WorkoutCard>
            );
          },
        )}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
