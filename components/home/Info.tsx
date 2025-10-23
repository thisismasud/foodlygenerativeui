import { inter, poppins } from "@/lib/fonts";
import DeliverMan from "@/public/icons/ScootScoot.svg";
import Merchant from "@/public/icons/Storefront.svg";
import App from "@/public/icons/iphone.svg";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Info() {
  return (
    <div className="flex md:flex-row flex-col py-16 justify-center gap-10 md:gap-7 items-center ">
      <div className="flex flex-row sm:flex-col sm:items-center items-start justify-center py-2 lg:px-15 px-3">
        <Image
          src={DeliverMan}
          width={150}
          height={150}
          alt="Delivery man"
          className="w-[110px] sm:w-auto "
        />
        <div className="pl-4">
          <h2
            className={`${poppins.className} text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-50 mt-2 text-left sm:text-center`}
          >
            Become a Foodler
          </h2>
          <p
            className={`${inter.className} text-left sm:text-center text-[13px] sm:text-[15px] my-2 text-zinc-700 dark:text-zinc-200`}
          >
            As a delivery driver, make money and work on your schedule. Sign up
            in minutes.
          </p>
          <Link
            href="/delivery"
            className={` ${inter.className} font-bold flex flex-row items-center justify-start sm:justify-center gap-2 text-[14px] sm:text-[16px] text-orange-700 dark:text-orange-500 hover:text-orange-800 transition-all duration-300`}
          >
            <span>Start Earning</span> <MoveRight size={18} />
          </Link>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col sm:items-center items-start justify-center py-2 lg:px-20 px-3">
        <Image
          src={Merchant}
          width={150}
          height={150}
          alt="Delivery man"
          className="w-[110px] sm:w-auto"
        />
        <div className="pl-4">
          <h2
            className={`${poppins.className} text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-50 mt-2 sm:text-center`}
          >
            Become a Merchant
          </h2>
          <p
            className={`${inter.className} sm:text-center text-[13px] sm:text-[15px] my-2 text-zinc-700 dark:text-zinc-200`}
          >
            Attract new customers and grow sales, starting with 0% commissions
            for up to 30 days.
          </p>
          <Link
            href="/delivery"
            className={` ${inter.className} font-bold flex flex-row items-center justify-start sm:justify-center gap-2 text-[14px] sm:text-[16px] text-orange-700 dark:text-orange-500 hover:text-orange-800 transition-all duration-300`}
          >
            <span>Signup for Foodly</span> <MoveRight size={18} />
          </Link>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col sm:items-center items-start justify-center py-2 lg:px-20 px-3">
        <Image
          src={App}
          width={150}
          height={150}
          alt="Delivery man"
          className=""
        />
        <div className="pl-5">
          <h2
            className={`${poppins.className} text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-50 mt-2 sm:text-center`}
          >
            Get the best Foodly experience
          </h2>
          <p
            className={`${inter.className} sm:text-center text-[13px] sm:text-[15px] my-2 text-zinc-700 dark:text-zinc-200`}
          >
            Experience the best your neighborhood has to offer, all in one app.
          </p>
          <Link
            href="/delivery"
            className={` ${inter.className} font-bold flex flex-row items-center sm:justify-center gap-2 text-[14px] sm:text-[16px] text-orange-700 dark:text-orange-500 hover:text-orange-800 transition-all duration-300`}
          >
            <span>Get the app</span> <MoveRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
