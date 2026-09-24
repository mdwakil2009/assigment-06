import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/font";

const Navbar = () => {
  return (
    <div className="text-white border-b border-gray-700">
      <nav className="container mx-auto flex justify-between items-center py-6 ">
        <div className="flex items-center font-bold text-2xl gap-3">
          <Image src={logo} className="h-[35px] w-[35px]" alt="Fitlog logo" />
          <h4 className={`${oswald.className}`}>FITLOG</h4>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-white px-3 py-2 hover:bg-gray-600 rounded-full active:text-shadow-green-500"
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/plan"
              className="text-white px-3 py-2 hover:bg-gray-600 rounded-full active:text-shadow-green-500"
            >
              My Plan
            </Link>
          </li>
        </ul>

        <div className="flex justify-center gap-10">
          <Link href="">
            Plan{" "}
            <span className="border border-1 rounded-full px-1 items-center">
              0
            </span>
          </Link>

          <Link href="">
            Saved{" "}
            <span className="border border-1 rounded-full px-1 items-center">
              0
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
