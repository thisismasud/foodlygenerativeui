import Logo from "@/components/common/Logo";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-zinc-800/60 border border-zinc-400/40 dark:border-zinc-700/50 text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <div className="flex justify-center items-center mb-2">
          <Logo />
        </div>

        <p
          className={`${poppins.className} mb-6 text-center text-zinc-700 dark:text-zinc-100 text-sm`}
        >
          Sign in to your account
        </p>
        <form>
          <input
            id="email"
            className="text-zinc-800 dark:text-zinc-200 w-full border my-3 bg-transparent border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            id="password"
            className=" text-zinc-800 dark:text-zinc-200 w-full border mt-1 bg-transparent border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div className="text-right py-4">
            <a className="text-indigo-500 underline" href="#">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className={`${poppins.className} w-full mb-3 bg-orange-600 py-2.5 text-white rounded-full  cursor-pointer hover:bg-orange-700 transition-all duration-300 text-xs`}
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-4 text-zinc-700 dark:text-zinc-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-zinc-700 dark:text-zinc-300 underline"
          >
            Signup
          </Link>
        </p>
        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
            alt="appleLogo"
          />
          Log in with Apple
        </button>
        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
}
