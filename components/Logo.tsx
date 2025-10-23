"use client"; // required for usePathname
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const pathname = usePathname(); // get current path
  const isLoginPage = pathname === "/login";
   const isSignup = pathname === "/signup"

  return (
    <Link
      href="/"
      className={`${poppins.className} font-normal text-3xl sm:text-4xl 
        ${isLoginPage || isSignup ? "text-orange-500" : "text-white dark:text-orange-500"} 
        `}
    >
      <span>foodly</span>
    </Link>
  );
}

export default Logo;
