import Logo from "@/components/common/Logo";
import SignInWithGoogle from "@/components/auth/register/SignInWithGoogle";
import SignUpForm from "@/components/auth/register/SignUpForm";
import { poppins } from "@/lib/fonts";

export default function SignUp() {

    

  return (
    <section className="min-h-screen flex justify-center items-center py-5">
      <div className="shadow-[0px_0px_10px_0px] shadow-black/10 max-w-108 w-full rounded-xl bg-transparent dark:bg-zinc-900/80 border border-gray-100 dark:border-zinc-800/70 p-4 mx-2">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <h1
          className={`${poppins.className} mb-4 text-center text-md py-2 font-normal text-zinc-800 dark:text-zinc-100`}
        >
          Create new account
        </h1>

        <SignUpForm />

        <div className="relative my-8 text-center">
          <span className="relative z-10 bg-white dark:bg-zinc-900/80 px-3 text-gray-400 ">
            Or continue with
          </span>
          <div className="absolute top-1/2 left-0 h-px w-2/5 -translate-y-1/2 transform bg-zinc-300 dark:bg-zinc-400/80"></div>
          <div className="absolute top-1/2 right-0 h-px w-2/5 -translate-y-1/2 transform bg-zinc-300 dark:bg-zinc-400/80"></div>
        </div>

       <SignInWithGoogle/>

        <p className="mt-8 text-center text-sm text-gray-400">
          By clicking on sign in, you agree to our
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
