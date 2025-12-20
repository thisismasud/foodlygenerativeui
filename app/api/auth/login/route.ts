import prisma from "@/lib/prisma";
import { generateRefreshToken } from "@/utils/generateRefreshToken";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || "1d";
const JWT_EXPIRES = process.env.JWT_EXPIRES;

if (!JWT_SECRET || !REFRESH_TOKEN_EXPIRES || !JWT_EXPIRES) {
    throw new Error("Missing critical environment variables for authentication.");
}

// Pre-calculate days and maxAge for consistency
const refreshDays = parseInt(REFRESH_TOKEN_EXPIRES.replace("d", "") || "0");
const maxAgeInSeconds = refreshDays * 24 * 60 * 60;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    //input validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password are required!" },
        { status: 400 }
      );
    }

    //find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        password: true,
        email: true,
        role: true,
        avatar: true,
      },
    });
    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const userObject = {
      id: user.id,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    };

    //generate access
    const accessToken = jwt.sign(userObject, JWT_SECRET, {
      expiresIn: JWT_EXPIRES, //1h
    });

    //refresh toekn
    const refreshToken = generateRefreshToken();

    const expiresAt = new Date();
    expiresAt.setDate(
      expiresAt.getDate() + parseInt(REFRESH_TOKEN_EXPIRES.replace("d", ""))
    );

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: expiresAt,
      },
    });

    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      accessToken,
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: maxAgeInSeconds,
      sameSite: "strict",
    });
    return response;
  } catch (error) {
    console.error("Login error", error);
    return NextResponse.json({ error: "Authentication Failure" }, { status: 500 });
  }
}
