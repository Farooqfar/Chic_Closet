import Post from "@/app/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  let { id } = await req.json();
  console.log(id);
  let find_data = await Post.findOne({ _id: id });
  console.log(find_data);
}

export async function PUT(req) {
  let { id, title, description, price, sale, sold } = await req.json();
  const get_all_data = await Post.findByIdAndUpdate(id, {
    title,
    description,
    price,
    sale,
    sold,
  });
  console.log(sold);
  console.log(get_all_data);
  return NextResponse.json({ success: true, status: 201 });
}
