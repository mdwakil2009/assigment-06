
import Image from "next/image";
import React from "react";
import BannerImge from "@/assets/banner.png";
import { oswald } from "@/lib/font";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8
      text-white bg-[#222630]
      px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16
      rounded-3xl md:rounded-4xl
      mt-6 md:mt-10
      mx-4 sm:mx-6 md:mx-auto
      max-w-[1200px] w-auto"
    >
      
      <div className="space-y-5 md:space-y-6">

        <span
          className={`text-[#C2F800] text-sm sm:text-base ${oswald.className}`}
        >
          WORKOUT LIBRARY
        </span>

        <h2
          className={`${oswald.className} font-semibold
          text-3xl sm:text-4xl md:text-5xl
          leading-tight`}
        >
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>

        <p className="text-[#9CA3AF] text-sm sm:text-base leading-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        
        <a
          href="#cards"
          className="flex w-fit items-center gap-3
          bg-[#C2F800] rounded-lg
          px-5 py-2.5 sm:px-6 sm:py-3
          text-[#000000] font-medium
          text-sm sm:text-base
          cursor-pointer"
        >
          BROWSE WORKOUTS
          <FaArrowRightFromBracket />
        </a>

      </div>
      <div className="flex justify-center">
        <Image
          src={BannerImge}
          alt="Banner img"
          className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-lg"
        />
      </div>

    </div>
  );
};

export default Banner;

