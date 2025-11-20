import { supabase } from "@/lib/supabase";
import { RegisterInputs, RegisterUserResponse } from "@/types/types";
import api from "./http";

export const signupUser = async (
  data: RegisterInputs
): Promise<RegisterUserResponse> => {
  const response = await api.post<RegisterUserResponse>("/auth/register", data);
  return response.data;
};
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/callback`,
    },
  });
  if (error) throw error;
  return data;
}

export const syncPrisma = async (user: any) => {
  const response = await api.post("/auth/sync", user);
  return response;
};
