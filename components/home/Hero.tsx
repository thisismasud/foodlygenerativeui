import { poppins } from "@/lib/fonts";
import { Package2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1
        className={`${poppins.className} font-normal text-[2.8rem] leading-13 lg:leading-15 md:text-[3.2rem] max-w-3xl mx-auto px-4`}
      >
        Get{" "}
        <strong className="font-medium bg-gradient-to-r from-orange-500 to-orange-200 text-transparent bg-clip-text">
          Free Food Delivery
        </strong>{" "}
        On Your First Order
      </h1>
      <p className="mb-8 text-xs sm:text-sm">*Other fees may apply</p>

      <button className="group px-5 py-2.5 rounded-full bg-orange-600 text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-orange-700">
        <p className="relative h-6 overflow-hidden">
          <span className="transition-transform duration-300 group-hover:-translate-y-full flex flex-row gap-2 justify-center">
            <Package2 /> <span>Get The Best Deals Now</span>
          </span>
          <span className="absolute w-full top-full left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:translate-y-[-100%] flex flex-row gap-2 ">
            <Package2 /> <span>Get The Best Deals Now</span>
          </span>
        </p>
      </button>
    </section>
  );
}
