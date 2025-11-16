// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
// import { authOptions } from "@/lib/auth"; // your NextAuth config

// ----- RATE LIMIT CONFIG -----
const RATE_LIMIT_WINDOW = 10 * 1000; // 10 seconds
const RATE_LIMIT_MAX = 5;

const ipHits = new Map<string, { count: number; time: number }>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = ipHits.get(ip);

  if (!record) {
    ipHits.set(ip, { count: 1, time: now });
    return true;
  }

  // Reset window
  if (now - record.time > RATE_LIMIT_WINDOW) {
    ipHits.set(ip, { count: 1, time: now });
    return true;
  }

  // Check limit
  if (record.count >= RATE_LIMIT_MAX) return false;

  record.count++;
  return true;
}

// ----- ALLOWED ORIGIN -----
const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_BASE_URL; 
// example: https://myapp.vercel.app

export async function protectApi(req: Request) {
  const origin = req.headers.get("origin");
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  // CORS check
  if (origin && origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: "Unauthorized origin" }, { status: 403 });
  }

  // Rate-limit check
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  // Auth check
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

  return null; // everything OK
}
