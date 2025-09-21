import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    // Example: redirect all /product paths to /login
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const compare = jwt.verify(token, process.env.JWT_KEY);
    if (compare) {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/product/:path*"], // <-- matches /product and all subpaths
};
