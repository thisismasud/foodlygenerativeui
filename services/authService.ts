
import { supabase } from '@/lib/supabase'
import api from './http'
import { RegisterInputs, RegisterUserResponse } from '@/types/types'

export const signupUser = async (data: RegisterInputs): Promise<RegisterUserResponse> =>{
    const response = await api.post<RegisterUserResponse>("/auth/register", data)
    return response.data
}
export async function signInWithGoogle(){
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/auth/callback`
        }
    })
    if(error) throw error;
    return data;
}