import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES || "15m";
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || "7d";

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
    const storedToken = await prisma?.refreshToken.findUnique({
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

    //if token is valid, generate new access token
    const newAccessTokenPayload = {
        id: storedToken.user.id,
        email: storedToken.user.email,
        role: storedToken.user.role
    }

    const newAccessToken = jwt.sign(newAccessTokenPayload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES
    })

    

    
  } catch (error) {
    console.error("Refresh token generation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error during generating refresh token" },
      { status: 500 }
    );
  }
}
