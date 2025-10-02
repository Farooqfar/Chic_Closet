import Post from "@/app/models/post";
import { NextResponse } from "next/server";

export async function GET(req) {
  let { searchParams } = new URL(req.url);
  let id = searchParams.get("id");
  console.log(id);
  let find_data = await Post.findById(id);
  console.log(find_data);
  return NextResponse.json({ success: true, status: 201, data: find_data });
}

export async function PUT(req) {
  let { id, title, description, price, sale, sold } = await req.json();
  console.log(id);
  const get_all_data = await Post.findByIdAndUpdate(
    id,
    {
      title,
      description,
      price,
      sale,
      sold,
    },
    { new: true }
  );

  return NextResponse.json({ success: true, status: 201 });
}
