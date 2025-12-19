"use client";
import Field from "@/components/common/Field";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { loginUser } from "@/services/authService";
import { LoginInputs } from "@/types/types";
import showToast from "@/utils/showToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginInputs>({
    defaultValues: {
      email: "user@email.com",
      password: "123456",
    },
  });

  const handleLogin = async (formData: LoginInputs) => {
    try {
      const response = await loginUser(formData);
      showToast(response?.message, "success");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Login Failed";
      showToast(errorMessage, error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Field label="" error={errors.email}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="py-2 w-full rounded-full border bg-transparent px-2 text-center text-gray-700 dark:text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("email", { required: "Email is required" })}
        />
      </Field>
      <Field label="" error={errors.password}>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          autoComplete="no-password"
          className="py-2 w-full rounded-full border bg-transparent px-2 text-center text-gray-700 dark:text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("password", { required: "Password is required" })}
        />
      </Field>

      <div className="text-right pb-2">
        <Link className="text-indigo-500 underline" href="/forgot-password">
          Forgot Password
        </Link>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="py-2 my-2 font-medium w-full rounded-full text-white transition-colors duration-300 cursor-pointer bg-orange-600 hover:bg-orange-700"
      >
        {isSubmitting ? <Spinner /> : "Login"}
      </Button>
      <Toaster position="bottom-center" />
    </form>
  );
};

export default LoginForm;
