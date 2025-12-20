import prisma from "@/lib/prisma";
import { generateRefreshToken } from "@/utils/generateRefreshToken";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || "1d";

// Calculate days and maxAge based on REFRESH_TOKEN_EXPIRES
const refreshDays = parseInt(REFRESH_TOKEN_EXPIRES.replace("d", "") || "1");
const maxAgeInSeconds = refreshDays * 24 * 60 * 60;

if (!JWT_SECRET || !JWT_EXPIRES) {
  throw new Error("Missing critical environment variables for authentication.");
}

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refreshToken")?.value;
    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token not found, please log in" },
        { status: 500 }
      );
    }

    //find the store token in db
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!storedToken) {
      const response = NextResponse.json(
        { error: "Invalid refresh token, please log in" },
        { status: 403 }
      );
      response.cookies.delete("refreshToken"); //clearing bad cookie
      return response;
    }

    if (storedToken.expiresAt < new Date()) {
      const response = NextResponse.json(
        { error: "Refresh token expired, please log in" },
        { status: 403 }
      );
      //Delete the expired token from the DB and the cookie
      await prisma.refreshToken.delete({ where: { token: refreshToken } });
      response.cookies.delete("refreshToken");
      return response;
    }

    //if token is valid, generate new access token
    const newAccessTokenPayload = {
      id: storedToken.user.id,
      email: storedToken.user.email,
      role: storedToken.user.role,
      avatar: storedToken.user.avatar || null,
    };

    const newAccessToken = jwt.sign(newAccessTokenPayload,JWT_SECRET as string,{expiresIn: JWT_EXPIRES as any});

    const newRefreshToken = generateRefreshToken();
    const newExpiresAt = new Date();
    newExpiresAt.setDate(newExpiresAt.getDate() + refreshDays);

    // Delete OLD token and create NEW token in a transaction
    await prisma.$transaction([
        prisma.refreshToken.delete({ where: { token: refreshToken } }),
        prisma.refreshToken.create({
            data: {
                token: newRefreshToken,
                userId: storedToken.user.id,
                expiresAt: newExpiresAt,
            },
        }),
    ]);

    const response = NextResponse.json({
      message: "Access token refreshed successfully",
      user: {
        id: storedToken.user.id,
        email: storedToken.user.email,
        role: storedToken.user.role,
      },
      accessToken: newAccessToken,
    });
    return response;
  } catch (error) {
    console.error("Refresh token generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error during generating refresh token" },
      { status: 500 }
    );
  }
}
