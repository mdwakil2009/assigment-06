"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const PlanButton = ({ library }: { library: IWorkoutLibrary }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handlePlanButton = () => {
    const addedWorkout = plan.filter(
      (item) => item.id === library.id
    );

    if (addedWorkout.length > 0) {
       return toast.error("Already added to today's plan");
    }

    setPlan([...plan, library]);

    toast.success("Added to today's plan");
  };

  return (
    <button
      className="flex items-center justify-center gap-2 bg-[#C2F800]
      text-black font-bold px-4 py-2 rounded-xl
      cursor-pointer"
      onClick={handlePlanButton}
    >
      <LuCalendarPlus2 />
      Add to today's plan
    </button>
  );
};

export default PlanButton;