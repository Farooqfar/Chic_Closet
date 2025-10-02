import RegisterUser from "@/app/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import registerUser from "@/app/models/register";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const find_Email = await RegisterUser.findOne({ email });

    if (!find_Email) {
      return NextResponse.json(
        { success: false, message: "Email not found" },
        { status: 404 }
      );
    }

    await registerUser.comparePassword(password);

    if (!compare_password) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: find_Email._id, email: find_Email.email },
      process.env.JWT_KEY,
      { expiresIn: "1h" } // optional but recommended
    );
    const res = NextResponse.json(
      {
        success: true,
        user: {
          id: find_Email._id,
          email: find_Email.email,
        },
      },
      { status: 200 }
    );

    res.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/", // must be root so middleware can read it
      maxAge: 60 * 60,
    });
    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
