import { oswald } from "@/lib/font";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { PiTimerDuotone } from "react-icons/pi";
import { TbBrandTinder } from "react-icons/tb";

interface IWorkoutLibraryProps {
  workoutlibrary: IWorkoutLibrary;
}

const WorkoutCard = ({ workoutlibrary }: IWorkoutLibraryProps) => {
  return (
    <Link href={`/workout/${workoutlibrary.id}`}>  
    <div className="bg-[#222630] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#C2F800]  mx-auto max-w-[1200px]  w-full">
      <div className="h-55 overflow-hidden">
        <Image
          src={workoutlibrary.image}
          alt={workoutlibrary.name}
          width={400}
          height={250}
          className="w-{400} h-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {workoutlibrary.muscleGroups.map((muscle, ind) => {
            return (
              <span
                key={ind}
                className="bg-[#C2F800] text-[#C2F800] border  px-3 py-1 rounded-full text-black text-xs font-medium"
              >
                {muscle}
              </span>
            );
          })}
        </div>

        <h3 className={`${oswald.className} text-2xl font-semibold mb-3`}>
          {workoutlibrary.name}
        </h3>

        <p className="text-[#9CA3AF] text-sm mb-5">
          {workoutlibrary.equipment}
        </p>

        <div className="flex items-center justify-between border-t border-gray-700 pt-4 text-sm">
          <span className=" flex items-center gap-1">
            <PiTimerDuotone /> {workoutlibrary.duration} min
          </span>

          <span className="flex items-center gap-1">
            <TbBrandTinder /> {workoutlibrary.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FaRegStar /> {workoutlibrary.rating}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;
