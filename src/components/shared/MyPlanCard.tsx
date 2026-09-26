
import { IWorkoutLibrary } from "@/type/WorkoutLibrary";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa6";
import { PiTimerDuotone } from "react-icons/pi";
import { TbBrandTinder } from "react-icons/tb";

interface IMyPlanCardProps {
  workoutlibrary: IWorkoutLibrary;
}

const MyPlanCard = ({ workoutlibrary }: IMyPlanCardProps) => {
  return (
   <div className="bg-[#222630] border border-gray-700 rounded-2xl p-4 mb-4">
  <div className="flex flex-col md:flex-row gap-5">

    {/* Image */}
    <div className="w-full md:w-48 h-32 shrink-0 overflow-hidden rounded-xl">
      <Image
        src={workoutlibrary.image}
        alt={workoutlibrary.name}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Workout Content */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-white mb-2">
        {workoutlibrary.name}
      </h3>

      <p className="text-gray-400 text-sm mb-3">
        {workoutlibrary.equipment}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {workoutlibrary.muscleGroups.map((muscle, index) => (
          <span
            key={index}
            className="bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs font-medium"
          >
            {muscle}
          </span>
        ))}
      </div>

      <div className="flex gap-5 text-sm text-gray-300">
        <span>{workoutlibrary.duration} min</span>
        <span>{workoutlibrary.caloriesBurned} kcal</span>
        <span>{workoutlibrary.rating}</span>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex items-center justify-end gap-3 md:w-auto">
      
      <Link
        href={`/workout/${workoutlibrary.id}`}
        className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:border-[#C2F800] hover:text-[#C2F800] whitespace-nowrap"
      >
        View Details
      </Link>

      <button
        className="bg-[#C2F800] text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
      >
        Mark as Done
      </button>

      <button
        className="border border-gray-600 px-3 py-2 rounded-lg text-gray-400 hover:text-red-400"
      >
        ✕
      </button>

    </div>

  </div>
</div>
  );
};

export default MyPlanCard;
