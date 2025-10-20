import Announcement from "@/components/home/Announcement";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import HeroBanner from "@/public/images/hero-food-banner.png";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="relative w-full h-[75vh] sm:h-[80vh] overflow-hidden">
        {/* 🔹 Full-screen banner image */}
        <Image
          src={HeroBanner}
          alt="Food Banner"
          fill
          priority
          placeholder="blur"
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-top"
        />

        {/* 🔹 Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 🔹 Announcement bar at very top */}
        <div className="absolute top-0 left-0 w-full z-40">
          <Announcement />
        </div>

        {/* 🔹 Navbar below announcement */}
        <div className="absolute top-[2.5rem] sm:top-[3rem] left-0 w-full z-30 px-3 sm:px-6 sm:py-3 py-2">
          <Header />
        </div>

        {/* 🔹 Hero content centered */}
        <div className="relative flex flex-col top-[46%] md:top-[40%]  h-full text-white text-center px-4 max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Info />
      </div>
    </section>
  );
}
