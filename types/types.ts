import { ReactNode } from "react";

export interface FieldProps {
    label?: string;
    children: ReactNode;
    htmlFor?: string;
    error?: {message?: string}
}
export interface RegisterInputs {
    name: string,
    email: string,
    password: string,
    confirmPassword?: string
}
export type userObject = {
   id: string,
   name: string,
   email: string,
   role: string
}

export interface RegisterUserResponse {
    message: string,
    user: userObject
}