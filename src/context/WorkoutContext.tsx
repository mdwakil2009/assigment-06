"use client";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import React, {
  createContext,
  ReactNode,
  use,
  useContext,
  useState,
} from "react";
interface WorkoutContextType {
  plan: IWorkoutLibrary[];
  saved: IWorkoutLibrary[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkoutLibrary[]>>;
  setSaved: React.Dispatch<React.SetStateAction<IWorkoutLibrary[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>(
  {} as WorkoutContextType,
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkoutLibrary[]>([]);
  const [saved, setSaved] = useState<IWorkoutLibrary[]>([]);
  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
