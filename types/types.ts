import { ReactNode } from "react";

export interface FieldProps {
    label?: string;
    children: ReactNode;
    htmlFor?: string;
    error?: {message?: string}
}