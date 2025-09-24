import Post from "@/app/models/post";
import { get } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  let { title, description, price, sale, sold, images } = await req.json();
  const data = await Post.create({
    title,
    description,
    price,
    sale,
    sold,
    image: images,
  });
  console.log("title", title);
  return NextResponse.json({ success: true, status: 201 });
}

export async function GET(req) {
  let all_data = await Post.find();
  return NextResponse.json({ success: true, status: 200, data: all_data });
}

export async function DELETE(res) {
  let { id } = await res.json();
  const delete_item = await Post.findByIdAndDelete({ _id: id });
  console.log(id);
  return NextResponse.json({ success: true, status: 201 });
}
