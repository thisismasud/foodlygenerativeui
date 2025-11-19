import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
   const response = await request.json()

//   await prisma.user.upsert({
//     where: { supabaseId: user.id },
//     update: {
//       name: user.user_metadata.full_name || null,
//       email: user.email!,
//       avatar: user.user_metadata.avatar_url || null,
//     },
//     create: {
//       supabaseId: user.id,
//       name: user.user_metadata.full_name || null,
//       email: user.email!,
//       avatar: user.user_metadata.avatar_url || null,
//     },
//   });
console.log(response)

  return NextResponse.json({ ok: true });
}
