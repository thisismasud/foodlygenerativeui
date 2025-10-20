import { poppins } from "@/lib/fonts";
export default function Announcement() {
  return (
    <section
      className={`flex justify-center items-center bg-zinc-100 dark:bg-black/70 text-white py-3 ${poppins.className}`}
    >
      <div className="flex gap-5 justify-center items-center">
        <div className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-100">
          30% Off Crazy Offer!
        </div>
        <div className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-100">
          Use Coupon{" "}
          <span className=" dark:bg-white bg-zinc-800 text-white dark:text-zinc-800 px-1 ml-1 rounded-sm ">
            BD40
          </span>
        </div>
      </div>
    </section>
  );
}
