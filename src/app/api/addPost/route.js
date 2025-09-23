import { NextResponse } from "next/server";

export async function POST(req) {
  let { title, description, price, sale, sold, image } = await req.json();
  console.log(title);
  return NextResponse.json({ success: true, status: 201 });
}
