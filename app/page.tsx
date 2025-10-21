import CallToAction from "@/components/home/CallToAction";
import Faq from "@/components/home/Faq";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import Promo from "@/components/home/Promo";
import HeroBanner from "@/public/images/hero-food-banner.png";
import Image from "next/image";
import Testimonials from "./../components/home/Testimonials";
import Footer from "@/components/Footer";

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
          className="object-cover object-[40%_50%] sm:object-top"
        />

        {/* 🔹 Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 🔹 Announcement bar at very top */}
        {/* <div className="absolute top-0 left-0 w-full z-40">
          <Announcement />
        </div> */}

        {/* 🔹 Navbar below announcement */}
        <div className="absolute top-[1rem] sm:top-[1.5rem] left-0 w-full z-30 px-3 sm:px-6 sm:py-3 py-2">
          <Header />
        </div>

        {/* 🔹 Hero content centered */}
        <div className="relative flex flex-col top-[41%] md:top-[36%] h-full text-white text-center px-4 max-w-7xl mx-auto">
          <Hero />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <Info />
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

      <Footer/>
    </div>
  );
}
