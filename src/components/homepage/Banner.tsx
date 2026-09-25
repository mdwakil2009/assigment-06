import Image from "next/image";
import React from "react";
import BannerImge from "@/assets/banner.png";
import { oswald } from "@/lib/font";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-2 justify-between gap-4 items-center text-white
     bg-[#222630]  px-12 py-16 rounded-4xl mt-10 mx-[50px]  mx-auto max-w-[1200px] 
      w-full"
    >
      <div className="space-y-6">
        <span className={`text-[#C2F800] ${oswald.className} `}>
          WORKOUT LIBRARY
        </span>

        <h2 className={`${oswald.className} font-semibold text-5xl`}>
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>

        <p className="text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <a href="#cards"><button className="flex items-center gap-3 bg-[#C2F800] rounded-lg px-6 py-3 text-[#000000]">
          BROWSE WORKOUTS
          <FaArrowRightFromBracket />
        </button></a>
      </div>

      <div className="flex justify-center">
        <Image src={BannerImge} alt="Banner img" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default Banner;
