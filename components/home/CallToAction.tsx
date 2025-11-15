import { poppins } from "@/lib/fonts";

export default function CallToAction() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full text-center py-20 md:py-30 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://media.licdn.com/dms/image/v2/C4E12AQFgxP-qIU0MYg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1548421442586?e=2147483647&v=beta&t=BX0qFJNWVf2k_NmyjT9ZIwVww39FqOFVMfJye0mRoBs')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-5">
        <h1 className={`${poppins.className} text-2xl md:text-4xl font-medium text-white max-w-4xl`}>
          Satisfy Your Cravings with Fast, Fresh, and Reliable Delivery
        </h1>
        <div className="h-[3px] w-32 my-2 bg-gradient-to-l from-transparent to-zinc-600"></div>
        <p className="text-sm md:text-base text-white max-w-xl">
          Discover local favorites and new tastes — hot meals delivered straight to your door, whenever hunger strikes.
        </p>
        <button className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-orange-600 to-orange-400 hover:scale-105 transition duration-300 text-white rounded-full">
          Order Now
        </button>
      </div>
    </section>
  );
}
