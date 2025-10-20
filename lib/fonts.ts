import { Inter, Nova_Square, Poppins, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const nova_Square = Nova_Square({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nova-square",
  weight: "400"
});
