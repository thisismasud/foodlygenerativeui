import { syncUserToPrisma } from "@/lib/syncUserToPrisma";

export async function POST(req: Request) {
  try {
    const user = await req.json();

    if (!user?.id || !user?.email) {
      return new Response("Invalid user data", { status: 400 });
    }

    await syncUserToPrisma(user);
    return new Response("User synced", { status: 200 });
  } catch (err) {
    console.error("Sync failed:", err);
    return new Response("Sync failed", { status: 500 });
  }
}
