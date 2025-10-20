import { poppins } from "@/lib/fonts";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`flex items-center space-x-4 ${poppins.className} text-[14px] sm:text-[15px] lg:[text-16px]`}
    >
      <Link
        href="/login"
        className=" text-white hover:text-orange-300 flex flex-row gap-1 justify-center items-center"
      >
        <LogIn size={15} /> <span>Login</span>
      </Link>
      <Link
        href="/register"
        className="px-3 bg-orange-600 py-1 rounded-lg text-white hover:bg-orange-700 transition-all duration-300"
      >
        Sign up for free delivery
      </Link>
    </nav>
  );
}
