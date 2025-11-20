// src/lib/auth.ts
import prisma from "./prisma"; // your Prisma client

export async function syncUserToPrisma(supabaseUser: any) {
  if (!supabaseUser?.id || !supabaseUser?.email) return null;

  const authId = supabaseUser.id; 
  const email = supabaseUser.email;
  const name =
    supabaseUser.user_metadata?.full_name ||
    supabaseUser.user_metadata?.name ||
    "No name";
  const avatar =
    supabaseUser.user_metadata?.avatar_url ||
    supabaseUser.user_metadata?.picture ||
    null;

  // First, try to find the user by authId
  let user = await prisma.user.findUnique({ where: { authId } });

  if (user) {
    // User exists, update info if necessary
    user = await prisma.user.update({
      where: { authId },
      data: { email, name, avatar, updatedAt: new Date() },
    });
  } else {
    // Check if a user with same email exists
    const existingEmailUser = await prisma.user.findUnique({ where: { email } });

    if (existingEmailUser) {
      // User exists by email but not linked to authId -> link it
      user = await prisma.user.update({
        where: { email },
        data: { authId, name, avatar, updatedAt: new Date() },
      });
    } else {
      // New user -> create
      user = await prisma.user.create({
        data: { authId, email, name, avatar, role: "CUSTOMER" },
      });
    }
  }

  return user;
}
