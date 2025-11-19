"use client";
import { signupUser } from "@/services/authService";
import { RegisterInputs } from "@/types/types";
import showToast from "@/utils/showToast";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import Field from "../common/Field"
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterInputs>();

  const password = watch("password");
  const router = useRouter()

  const submitForm = async (formData: RegisterInputs) => {
    const { confirmPassword, ...filteredFormData } = formData;
    const toastId = showToast("Creating account...", "loading");
    try {
      const response = await signupUser(filteredFormData);
      showToast(response?.message, "success", toastId);
      setTimeout(()=>{
        router.push("/login")
      }, 1000)
    } catch (error: any) {
    //   console.error("Registration error:", error);
      const errorMessage = error.response?.data?.error || "Signup Failed";
      showToast(errorMessage, error, toastId);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          autoComplete="off"
          className="py-2 w-full rounded border  bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("name", { required: "Name is required" })}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          autoComplete="email"
          className="py-2 w-full rounded border  bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("email", { required: "Email is required" })}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          autoComplete="no-password"
          className="py-2 w-full rounded border bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("password", { required: "Password is required" })}
        />
      </Field>
      <Field label="Confirm Password" error={errors.confirmPassword}>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          autoComplete="no-password"
          className="py-2 w-full rounded border bg-transparent px-2 text-center text-gray-100  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Password do not match",
          })}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`py-2 mt-2 font-medium w-full rounded text-white transition-colors duration-300 
    ${
      isSubmitting
        ? "cursor-not-allowed bg-gray-600" // disabled look
        : " cursor-pointer bg-orange-600 hover:bg-orange-700"
    }`}
      >
        Create account
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
};

export default SignUpForm;
