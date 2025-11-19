
import CallToAction from "@/components/home/CallToAction";
import Faq from "@/components/home/Faq";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import Promo from "@/components/home/Promo";
import HeroBanner from "@/public/images/hero-food-banner.png";
import { WandSparkles } from "lucide-react";
import Image from "next/image";
import Testimonials from "./../components/home/Testimonials";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div>
      {/* hero and navbar */}
      <section className="relative w-full h-[95vh] sm:h-[75vh] overflow-hidden">
        {/* 🔹 Full-screen banner image */}
        <Image
          src={HeroBanner}
          alt="Food Banner"
          fill
          priority
          placeholder="blur"
          quality={90}
          sizes="100vw"
          className="object-cover object-[30%_42%] sm:object-[20%_25%]"
        />

        {/* 🔹 Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 🔹 Announcement bar at very top */}
        {/* <div className="absolute top-0 left-0 w-full z-40">
          <Announcement />
        </div> */}

        {/* 🔹 Navbar below announcement */}
        <div className="absolute top-4 sm:top-9 left-4 right-3 sm:left-10 sm:right-8">
          <Header />
        </div>

        {/* 🔹 Hero content centered */}
        <div className="absolute top-[35%] sm:top-[34%] left-[50%] translate-x-[-50%] bg-white py-1 px-2 rounded-full flex flex-row gap-2 items-center justify-center text-zinc-800 text-xs">
          <WandSparkles size={14} className="text-orange-800" />
          <span>WITH THE POWER OF AI</span>
        </div>

        <div className="relative flex flex-col top-[40%] md:top-[40%] h-full text-white text-center px-4 max-w-7xl mx-auto">
          <Hero />
        </div>
      </section>

      <section className=" bg-zinc-100/80 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <Info />
        </div>
      </section>

      {/* promo */}
      <section className="max-w-7xl mx-auto px-5 my-24">
        <Promo />
      </section>

      <section className="w-full mt-24">
        <CallToAction />
      </section>

      <section className="max-w-7xl mx-auto px-0 sm:px-10 mt-24">
        <Testimonials />
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-10 my-24">
        <Faq />
      </section>
      <div className="absolute top-[80vh] h-44 w-44 bg-linear-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
      <Footer />
    </div>
  );
}
