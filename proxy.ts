import { updateSession } from "./lib/supabase/proxy";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = [
  '/', // The root path
  '/home',
  '/about',
  '/contact',
  '/signup',
  '/error',
];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (PUBLIC_PATHS.includes(pathname)) {
    // If the path is a public page, skip the session update logic.
    return NextResponse.next(); 
  }

  return await updateSession(request);
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|home|about|contact|error|^$|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
