import RegisterUser from "@/app/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req) {
  const { Fname, Lname, email, password } = await req.json();

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const User = await RegisterUser.create({
      Fname,
      Lname,
      email,
      password: hashPassword,
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
