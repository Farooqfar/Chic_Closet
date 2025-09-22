"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Addpost() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    sale: false,
    soldOut: false,
    image: "",
  });
  const handleValue = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      title: "",
      description: "",
      price: 0,
      sale: false,
      soldOut: false,
      image: "",
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
          <div className="flex flex-col gap-1">
            <span>Image</span>
            <input
              type="file"
              name="image"
              className="border p-2"
              accept="image/*"
              value={data.image}
              onChange={handleValue}
            />
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
