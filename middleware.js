import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("isAuthenticated");

  const protectedRoutes = ["/subscribers", "/applications", "/dashboard"];

  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
