import { connectDB } from "@/app/lib/register";
import registerUser from "@/app/models/register";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { Fname, Lname, email, password } = await req.json();
  try {
    await connectDB();
    const check_user_already_exist = await registerUser.exists({ email });
    if (check_user_already_exist) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "userAlready exist",
      });
    }
    const new_user = await registerUser({
      name: `${Fname} ${Lname}`,
      email,
      password,
    });
    await new_user.save();
    console.log(new_user);
    return NextResponse.json({
      success: true,
      status: 200,
      message: "user register successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      data: error,
    });
  }
}
