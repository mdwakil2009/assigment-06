import PlanButton from "@/components/workoutDetails/PlanButton";
import SavedButton from "@/components/workoutDetails/SavedButton";
import { oswald } from "@/lib/font";
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import Image from "next/image";
import React from "react";
import { FaBookmark } from "react-icons/fa";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const workoutlibraryData = await getWorkoutLibrary();

  const library = workoutlibraryData.find(
    (workout: IWorkoutLibrary) => String(workout.id) === String(id),
  );

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto max-w-[1200px] 
      w-full mt-10"
    >
      <div className="overflow-hidden rounded-2xl ">
        <Image
          src={library.image}
          alt={library.name}
          width={600}
          height={800}
          className=" w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col ">
        <h1
          className={`${oswald.className}text-3xl md:text-4xl font-semibold uppercase text-white mt-4 mb-3`}
        >
          {library.name}
        </h1>

        <p className="text-[#9CA3AF]  mb-5">{library.description}</p>

        <div className="flex  gap-2 mb-6">
          {library.muscleGroups.map((muscle: string, index: number) => (
            <span
              key={index}
              className="bg-[#C2F800] px-4 py-1 rounded-full text-black text-sm font-medium"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="bg-[#232834] rounded-2xl  mb-6 text-white">
          <table className={`${oswald.className} w-full `}>
            <tbody>
              <tr className="border-b border-gray-700 ">
                <td className="px-5 py-3 ">EQUIPMENT</td>
                <td className="px-5 py-3 text-right">{library.equipment}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="px-5 py-3">DIFFICULTY</td>
                <td className="px-5 py-3 text-right">{library.difficulty}</td>
              </tr>

              <tr className="border-b border-gray-700  ">
                <td className="px-5 py-3 ">SETS</td>
                <td className="px-5 py-3 text-right">{library.sets}</td>
              </tr>

              <tr className="border-b  border-gray-700">
                <td className="px-5 py-3 ">REPS</td>
                <td className="px-5 py-3 text-right">{library.reps}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="px-5 py-3 ">DURATION</td>
                <td className="px-5 py-3 text-right">{library.duration} min</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="px-5 py-3 ">CALORIES</td>
                <td className="px-5 py-3 text-right">
                  {library.caloriesBurned} kcal
                </td>
              </tr>

              <tr>
                <td className="px-5 py-3 ">RATING</td>
                <td className="px-5 py-3 text-right">{library.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6 text-white">
          <h2
            className={`${oswald.className}text-2xl font-semibold uppercase mb-4`}
          >
            INSTRUCTIONS
          </h2>

          <ol className=" ml-4 space-y-2 text-[#9CA3AF]">
            {library.instructions.map((instruction: string, index: number) => (
              <li key={index}>
                <span>{index + 1}. </span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <PlanButton library={library} />

          <SavedButton library={library} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
