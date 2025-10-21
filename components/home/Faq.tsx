"use client";

import { poppins } from "@/lib/fonts";
import React from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Simply browse restaurants near you, add your favorite dishes to the cart, and proceed to checkout. You can pay online or choose cash on delivery.",
    },
    {
      question: "Can I track my order in real time?",
      answer:
        "Yes! Once your order is confirmed, you can track your delivery partner’s location and estimated arrival time directly from the app.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major payment methods including debit/credit cards, mobile banking, digital wallets, and cash on delivery.",
    },
    {
      question: "How are delivery charges calculated?",
      answer:
        "Delivery charges depend on the restaurant’s distance from your location and current demand. You’ll see the delivery fee before confirming your order.",
    },
    {
      question: "What if I need to cancel or change my order?",
      answer:
        "You can cancel or modify your order before the restaurant starts preparing it. Go to 'My Orders' → 'Order Details' and choose 'Cancel' or 'Edit'.",
    },
    {
      question: "Do you deliver 24/7?",
      answer:
        "Delivery hours depend on restaurant availability. Some partners offer late-night or 24-hour delivery in selected areas.",
    },
  ];

  return (
    <div className={`${poppins.className}`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
        <p className=" text-sm font-medium text-orange-500">FAQ's</p>
        <h1 className="text-3xl font-semibold text-center bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 text-transparent bg-clip-text">
          Looking for answer?
        </h1>
        <p className="text-sm text-slate-500 dark:text-zinc-100 mt-2 pb-8 text-center">
          Get your favorite meals delivered fast and fresh — from local
          favorites to top-rated restaurants, all in one app.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="border-b border-slate-200 py-4 cursor-pointer w-full "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium text-[14px] sm:text-[16px] ">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p
              className={`text-sm text-zinc-700 dark:text-zinc-100 transition-all pr-4 duration-500 ease-in-out  ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
