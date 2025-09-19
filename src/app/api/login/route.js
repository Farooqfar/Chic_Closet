import RegisterUser from "@/app/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req) {
  const { email, password } = await req.json();
  console.log(password);
  try {
    let find_Email = await RegisterUser.findOne({ email });
    if (find_Email) {
      let compare_email = bcrypt.compare(password, find_Email.password);
      console.log(compare_email);
    }
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ success: true }, { status: 201 });
}
