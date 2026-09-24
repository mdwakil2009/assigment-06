import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/font";

const Footer = () => {
  return (
    <div className="border-t border-gray-700 mt-12 ">
      <div className="  mx-auto max-w-[1200px]  w-full ">
        <div className="flex items-center justify-between gap-10 text-white py-10 px-6">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Footer logo" width={35} height={35}></Image>
            <h2 className={`${oswald.className} font-bold `}>FITLOG</h2>
          </div>
          <div className="text-[#6B7280] text-sm max-w-xl ">
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
