import { poppins } from "@/lib/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`flex items-center space-x-2 ${poppins.className} text-[12px] sm:text-[14px] lg:[text-15px]`}
    >
      <Link
        href="/login"
        className=" text-white hover:text-orange-300 flex flex-row gap-1 justify-center items-center"
      >
        <span>Login</span>
      </Link>
      <Link
        href="/signup"
        className="px-2 sm:px-3 bg-orange-600 py-1 rounded-lg text-white hover:bg-orange-700 transition-all duration-300 "
      >
        Sign up for free delivery
      </Link>
    </nav>
  );
}
