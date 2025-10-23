import { WandSparkles } from "lucide-react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-end gap-2">
      <Logo />

      <div className="flex flex-row space-x-2">
        <Navbar />
        <ThemeToggle />
      </div>
      
    </div>
  );
}
