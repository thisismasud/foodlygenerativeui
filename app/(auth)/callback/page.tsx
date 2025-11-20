"use client";

import { Spinner } from "@/components/ui/spinner"; // Shadcn Spinner
import { supabase } from "@/lib/supabase";
import { syncPrisma } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;
        if (!session) return router.push("/login");

        // Sync user to database
        await syncPrisma(session.user);

        // Navigate to dashboard
        router.push("/dashboard");
      } catch (err: any) {
        console.error("Login failed:", err);
        setErrorMsg("Failed to login. Please try again.");
        setLoading(false);
      }
    };

    handleLogin();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 p-4">
      {loading ? (
        <div className="flex item-center justify-center gap-3">
          <Spinner className="h-10 w-10 text-primary" />
          <p className="text-gray-700 dark:text-white text-lg font-medium">
            Logging you in...
          </p>
        </div>
      ) : (
        <div className=" text-red-800 p-4">{errorMsg}</div>
      )}
    </div>
  );
}
