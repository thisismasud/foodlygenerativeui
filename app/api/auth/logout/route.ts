import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){
    try{
        //get the refresh token from cookies
        const refreshToken =  (await cookies()).get("refreshToken")?.value;

        if(refreshToken){
            //delete the refresh token from databse
            await prisma.refreshToken.deleteMany({
                where:{
                    token: refreshToken
                }
            })
        }

        //clear the cookies
        const response = NextResponse.json({message: "Logout successful"})
        response.cookies.delete("refreshToken")
        return response

    }catch(error){
        console.log("Logout error", error)
        return NextResponse.json({error: "Logout failed"}, {status: 500})
    }
}