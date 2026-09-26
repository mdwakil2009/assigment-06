"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

interface IMyPlanCardProps {
  workoutlibrary: IWorkoutLibrary;
  tap: string;
}

const MyPlanCard = ({
  workoutlibrary,
  tap,
}: IMyPlanCardProps) => {
  const { plan, setPlan, saved, setSaved } =
    useContext(WorkoutContext);

  const handleDone = () => {
    const updatedPlan = plan.filter(
      (item) => item.id !== workoutlibrary.id
    );

    setPlan(updatedPlan);

    toast.success("Workout completed");
  };

  const handleRemove = () => {
    if (tap === "today") {
      const updatedPlan = plan.filter(
        (item) => item.id !== workoutlibrary.id
      );

      setPlan(updatedPlan);

      toast.success("Removed from today's plan");
    } else {
      const updatedSaved = saved.filter(
        (item) => item.id !== workoutlibrary.id
      );

      setSaved(updatedSaved);

      toast.success("Removed from saved list");
    }
  };

  return (
    <div className="bg-[#222630] border border-gray-700 rounded-3xl p-4">
      <div className="flex flex-col md:flex-row gap-5">

        <div className="w-full md:w-48 h-32 overflow-hidden rounded-xl">
          <Image
            src={workoutlibrary.image}
            alt={workoutlibrary.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">
            {workoutlibrary.name}
          </h3>

          <p className="text-gray-400 text-sm mb-3">
            {workoutlibrary.equipment}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {workoutlibrary.muscleGroups.map(
              (muscle, index) => (
                <span
                  key={index}
                  className="bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs font-medium"
                >
                  {muscle}
                </span>
              )
            )}
          </div>

          <div className="flex gap-5 text-sm text-gray-300">
            <span>{workoutlibrary.duration} min</span>
            <span>
              {workoutlibrary.caloriesBurned} kcal
            </span>
            <span>{workoutlibrary.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 md:w-auto">

          <Link
            href={`/workout/${workoutlibrary.id}`}
            className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:border-[#C2F800] hover:text-[#C2F800] whitespace-nowrap"
          >
            View Details
          </Link>
          {tap === "today" && (
            <button
              onClick={handleDone}
              className="bg-[#C2F800] text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
            >
              Mark as Done
            </button>
          )}
          <button
            onClick={handleRemove}
            className="border border-gray-600 px-3 py-2 rounded-lg text-gray-400 hover:text-red-400 cursor-pointer"
          >
            <IoMdClose />
          </button>

        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;