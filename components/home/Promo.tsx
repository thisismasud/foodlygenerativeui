import { poppins } from "@/lib/fonts";
import PromoImage1 from "@/public/images/promo_image1.png";
import PromoImage2 from "@/public/images/promo_image2.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Promo() {
  return (
    <div>
      {/* section 1 */}
      <div
        className={`${poppins.className} flex flex-col-reverse md:flex-row justify-center items-center gap-5 mb-20`}
      >
        {/* Text content */}
        <div className="sm:max-w-5/12 mx-auto">
          <h2
            className={`${poppins.className} text-[1.8rem] leading-8 sm:text-4xl font-medium sm:font-semibold sm:leading-11 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 text-transparent bg-clip-text`}
          >
            Everything you crave, delivered.
          </h2>
          <p className="my-3 font-medium sm:font-bold text-sm sm:text-lg text-zinc-800 dark:text-white">
            Your favorite local restaurants.
          </p>
          <p className="text-[12px] sm:text-[14px] font-medium mb-3 leading-5 text-zinc-700 dark:text-zinc-300">
            Get a slice of pizza or the whole pie delivered, or pick up house lo
            mein from the Chinese takeout spot you've been meaning to try.
          </p>
          <Button
            variant="outline"
            className="rounded-full mt-2 sm:mt-5 bg-orange-600 outline-lime-50 text-white py-2 text-[13px] sm:text-[15px] cursor-pointer hover:bg-orange-700"
          >
            Find restaurants
          </Button>
        </div>
        {/* Image */}
        <div className="sm:max-w-7/12 mx-auto">
          <Image
            src={PromoImage1}
            width={0}
            height={0}
            className="object-cover h-[180px] sm:h-[520px] sm:w-[650px]"
            placeholder="blur"
            alt="Everything you need"
          />
        </div>
      </div>

      {/* section 2 */}
      <div
        className={`${poppins.className} flex flex-col md:flex-row justify-center items-center gap-5`}
      >
        {/* Image */}
        <div className="sm:max-w-7/12 mx-auto">
          <Image
            src={PromoImage2}
            width={0}
            height={0}
            className="object-cover h-[180px] sm:h-[520px] sm:w-[650px]"
            placeholder="blur"
            alt="FoodlyPass"
          />
        </div>
        {/* Text content */}
        <div className="sm:max-w-5/12 mx-auto mt-2 md:mt-0">
          <h2
            className={`${poppins.className} text-[1.8rem] leading-8 sm:text-4xl font-medium sm:font-semibold sm:leading-11 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 text-transparent bg-clip-text`}
          >
            FoodlyPass is <br /> delivery for less.
          </h2>
          <p className="text-[12px] sm:text-[14px] font-medium mb-3 leading-5 text-zinc-7800 dark:text-zinc-300 mt-4">
            Members get a $0 delivery fee on DashPass orders, 5% back on pickup
            orders, and so much more. Plus, it's free for 30 days.
          </p>
          <Button
            variant="outline"
            className="rounded-full mt-2 sm:mt-5 bg-orange-600 outline-lime-50 text-white py-2 text-[13px] sm:text-[15px] cursor-pointer hover:bg-orange-700"
          >
            Get FoodlyPass
          </Button>
        </div>
      </div>
    </div>
  );
}
