import { WandSparkles } from "lucide-react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center pt-1 relative sm:flex-row flex-col sm:gap-0 gap-2">
      <Logo />

      <div className="flex sm:absolute right-0 space-x-3">
        <Navbar />
        <ThemeToggle />
      </div>
      <div className="absolute text-xs sm:px-3 px-2 py-1 sm:top-6 top-24 left-[50%] translate-x-[-50%] text-center bg-white mt-2 text-zinc-900 flex flex-row gap-2 rounded-full">
        <WandSparkles size={14} className="text-orange-800" />{" "}
        <span>AI EXPERIENCE.</span>
      </div>
    </div>
  );
}
