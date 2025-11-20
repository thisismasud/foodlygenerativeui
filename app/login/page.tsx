import Logo from "@/components/common/Logo";
import LoginForm from "@/components/login/LoginForm";
import SignInWithGoogle from "@/components/register/SignInWithGoogle";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-zinc-900/80 w-full border border-zinc-400/40 dark:border-zinc-700/50 text-gray-500 max-w-96 mx-4 md:p-6 p-5 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <div className="flex justify-center items-center mb-2">
          <Logo />
        </div>

        <p
          className={`${poppins.className} mb-8 text-center text-zinc-700 dark:text-zinc-100 text-sm`}
        >
          Sign in to your account
        </p>
        <LoginForm/>
        <p className="text-center mt-4 mb-4 text-zinc-700 dark:text-zinc-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-zinc-700 dark:text-zinc-300 underline"
          >
            Signup
          </Link>
        </p>
        <div className="relative mt-6 mb-3 text-center">
          <span className="relative z-10 bg-white dark:bg-zinc-900/80 px-3 text-gray-400 ">
            Or continue with
          </span>
          <div className="absolute top-1/2 left-0 h-px w-2/5 -translate-y-1/2 transform bg-zinc-300 dark:bg-zinc-400/80"></div>
          <div className="absolute top-1/2 right-0 h-px w-2/5 -translate-y-1/2 transform bg-zinc-300 dark:bg-zinc-400/80"></div>
        </div>
    
        <SignInWithGoogle/>
      </div>
    </div>
  );
}
