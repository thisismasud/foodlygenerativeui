import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import prisma from "../prisma";

type registerProps = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser({ name, email, password }: registerProps) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      role: "CUSTOMER",
      password: hashedPassword,
      authId: randomUUID(),
    },
  });
  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password || "");
  if (!isValid) throw new Error("Invalid password");

  return user;
}
