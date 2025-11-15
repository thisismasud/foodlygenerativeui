import { poppins } from "@/lib/fonts";

const Testimonials = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
      review: "Fast delivery, hot food, and super easy to order online",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review: "Love the variety of restaurants and quick delivery every time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
      review: "Smooth app experience, food always arrives fresh and on time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review:
        "Amazing offers and discounts — makes ordering food even more fun!",
    },
  ];

  const CreateCard = ({ card}:{ card: any }) => (
    <div
      className={`${poppins.className} p-4 rounded-lg mx-4 shadow-orange-400 dark:shadow-orange-500 hover:shadow-lg transition-all duration-200 w-72 shrink-0`}
    >
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-normal">
            <p className="text-[13px] sm:text-[14px] text-orange-700 dark:text-orange-400">
              {card.name}
            </p>
          </div>
          <span className="text-xs font-normal text-slate-500 dark:text-zinc-200">
            {card.handle}
          </span>
        </div>
      </div>
      <p className="text-xs font-normal py-4 text-gray-800 dark:text-zinc-100">
        {card.review}
      </p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-orange-500"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
      <div className="flex justify-center items-center mr-auto text-orange-500 rounded-full px-3 py-1 ml-5">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
            stroke="#ce7e00"
            strokeMiterlimit="5.759"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-center ">Testimonials</div>
      </div>
      <h1
        className={`${poppins.className} text-center text-2xl sm:text-3xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 text-transparent bg-clip-text mt-2 ml-5 font-semibold`}
      >
        Don't just take our words
      </h1>
      <p
        className={`${poppins.className} text-slate-600 text-center dark:text-zinc-300 mt-4 ml-5 sm:text-sm text-xs pr-4`}
      >
        Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review.
      </p>
      <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-[#121212] dark:to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-[#121212] dark:to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-[#121212] dark:to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-[#121212] dark:to-transparent"></div>
      </div>
    </>
  );
};
export default Testimonials;
