"use client";
import { loginUser } from "@/services/authService";
import { LoginInputs } from "@/types/types";
import showToast from "@/utils/showToast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import Field from "@/components/common/Field";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginInputs>();

  const handleLogin = async (formData: LoginInputs) => {
    const toastId = showToast("Loging to your account...", "loading");
    try {
      const response = await loginUser(formData);
      showToast(response?.message, "success", toastId);
      console.log(response); //store to auth state
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Signup Failed";
      showToast(errorMessage, error, toastId);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Field label="" error={errors.email}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="py-2 w-full rounded-full border bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("email", { required: "Email is required" })}
        />
      </Field>
      <Field label="" error={errors.password}>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          autoComplete="no-password"
          className="py-2 w-full rounded-full border bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("password", { required: "Password is required" })}
        />
      </Field>

      <div className="text-right pb-2">
        <a className="text-indigo-500 underline" href="#">
          Forgot Password
        </a>
      </div>
      <button
        type="submit"
        className="py-2 my-2 font-medium w-full rounded-full text-white transition-colors duration-300 cursor-pointer bg-orange-600 hover:bg-orange-700"
      >
        Login
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
};

export default LoginForm;
