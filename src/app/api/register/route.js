import RegisterUser from "@/app/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req) {
  const { Fname, Lname, email, password } = await req.json();

  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const User = await RegisterUser.create({
      Fname,
      Lname,
      email,
      password: hashPassword,
    });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ success: true }, { status: 201 });
}
