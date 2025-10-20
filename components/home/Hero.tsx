import { inter, poppins } from "@/lib/fonts";
import { Package2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1
        className={`${poppins.className} font-normal text-5xl md:text-6xl max-w-3xl mx-auto px-4`}
      >
        Get Free Food Delivery On Your First Order
      </h1>
      <p className="mb-8">*Other fees may apply</p>
      <Link
        href="/register"
        className={`${inter.className} px-5 py-2 bg-orange-600 rounded-full text-white hover:bg-orange-700 transition-all duration-300 md:text-lg text-sm flex flex-row gap-2 justify-center items-center w-fit `}
      >
        <Package2 /> <span>Get The Best Deals Now</span>
      </Link>
    </section>
  );
}
