import { poppins } from "@/lib/fonts";
import Link from "next/link";
function Logo() {
  return (
    <Link
      href="/"
      className={`${poppins.className} font-normal text-3xl sm:text-4xl text-white dark:text-orange-500 flex flex-row gap-1 sm:absolute justify-center items-center sm:left-[50%] sm:translate-x-[-50%] sm:pl-0 pl-2`}
    >
      <span>foodly</span>
    </Link>
  );
}

export default Logo;
