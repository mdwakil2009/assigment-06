"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const SavedButton = ({ library }: { library: IWorkoutLibrary }) => {
  const { saved, setSaved } = useContext(WorkoutContext);

  const handleSavedButton = () => {
    const savedWorkout = saved.filter(
      (item) => item.id === library.id
    );

    if (savedWorkout.length > 0) {
      return toast.error("Already saved to your list");
      
    }

    setSaved([...saved, library]);

    toast.success("Saved for later");
  };

  return (
    <button
      className="flex items-center justify-center gap-2
      border border-gray-600 px-4 py-2 rounded-xl
      font-bold text-white cursor-pointer"
      onClick={handleSavedButton}
    >
      <FaBookmark />
      Save for later
    </button>
  );
};

export default SavedButton;