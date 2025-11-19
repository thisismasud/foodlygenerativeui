import Logo from "@/components/common/Logo";
import SignInWithGoogle from "@/components/register/SignInWithGoogle";
import SignUpForm from "@/components/register/SignUpForm";
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

        <button
          type="button"
          className="flex py-2 w-full items-center justify-center gap-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="#fff"
            ></path>
          </svg>
          Github
        </button>

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
