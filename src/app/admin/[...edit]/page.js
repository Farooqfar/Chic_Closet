"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { api } from "@/app/lib/axios";

export default function Addpost() {
  const param = useSearchParams();
  const id = param.get("id");
  const router = useRouter();

  const [data, setData] = useState({
    id: id,
    title: "",
    description: "",
    price: 0,
    sale: false,
    sold: false,
  });
  const handleValue = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const get_id = async () => {
    await api.post("/editPost", id);
  };
  useEffect(() => {
    get_id();
  });
  const handleForm = async (e) => {
    e.preventDefault();
    let send_data = await api.put("/editPost", data);

    setData({
      title: "",
      description: "",
      price: 0,
      sale: false,
      soldOut: false,
    });

    router.push("/admin");
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <form
          className="w-[50%] flex flex-col gap-3 border p-10 bg-gray-100"
          method="POST"
          onSubmit={handleForm}
        >
          <div className="flex flex-col gap-1">
            <span>Title</span>
            <input
              type="text"
              name="title"
              className="border p-2"
              value={data.title}
              onChange={handleValue}
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>Description</span>
            <textarea
              name="description"
              className="border p-2 resize-none"
              value={data.description}
              onChange={handleValue}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <span>Price</span>
            <input
              type="number"
              name="price"
              className="border p-2"
              value={data.price}
              onChange={handleValue}
              placeholder="Price"
              step={10}
              min={0}
            />
          </div>
          <div className="flex gap-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="sale"
                value="sale"
                className="hidden peer"
                onChange={handleValue}
              />
              <span className=" w-14 text-center p-2 border rounded-lg peer-checked:bg-blue-500 peer-checked:text-white">
                Sale
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="soldOut"
                value="soldOut"
                className="hidden peer"
                onChange={handleValue}
              />
              <span className=" w-14 text-center p-2 border rounded-lg peer-checked:bg-blue-500 peer-checked:text-white">
                Sold
              </span>
            </label>
          </div>

          <input
            type="submit"
            value="Add"
            className="w-full bg-blue-500 text-white p-2 text-center hover:scale-95 transition-all duration-300 cursor-pointer"
          />
        </form>
      </section>
    </>
  );
}
