import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
export async function middleware(request) {
  const token = request.cookies.get("token")?.value;
  console.log("All cookies:", request.cookies.getAll());

  if (!token) {
    console.log("No token found");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decoded = new TextEncoder().encode(process.env.JWT_KEY);
    console.log("Decoded JWT:", decoded);
    const { payload } = await jwtVerify(token, decoded);
    return NextResponse.next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/product/:path*"],
};
