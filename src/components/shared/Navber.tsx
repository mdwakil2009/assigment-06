"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/font";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { plan, saved } = useContext(WorkoutContext);

  const [Open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="text-white border-b border-gray-700">
      <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setOpen(!Open)} className="md:hidden text-2xl">
            {Open ? <FaXmark /> : <FaBars />}
          </button>

          <div className="flex items-center font-bold text-2xl gap-3">
            <Image src={logo} className="h-[35px] w-[35px]" alt="Fitlog logo" />

            <h4 className={`${oswald.className}`}>FITLOG</h4>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-2">
          <li>
            <Link
              href="/"
              className={`px-3 py-2 rounded-full font-semibold ${
                pathname === "/"
                  ? "text-[#C2F800]"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/workout/my-plan"
              className={`px-3 py-2 rounded-full font-semibold ${
                pathname === "/workout/my-plan"
                  ? "text-[#C2F800]"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 md:gap-10">
          <Link href="/workout/my-plan">
            Plan
            <span className="ml-2 bg-[#C2F800] text-black px-2 py-1 rounded-full text-xs font-bold">
              {plan.length}
            </span>
          </Link>

          <Link href="/workout/my-plan">
            Saved
            <span className="ml-2 bg-[#2D313B] text-white px-2 py-1 rounded-full text-xs font-bold">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>

      {Open && (
        <div className="md:hidden border-t border-gray-700 px-4 py-5">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-[#C2F800] font-bold"
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/workout/my-plan"
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-[#C2F800] font-bold"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
