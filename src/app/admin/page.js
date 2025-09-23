"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";

export default function Admin() {
  let [list, setList] = useState([
    {
      image: "c1.webp",
      title: "Colset",
    },
    {
      image: "c1.webp",
      title: "Colset",
    },
    {
      image: "c1.webp",
      title: "Colset",
    },
  ]);
  return (
    <>
      <main className="w-full h-full">
        <div className="w-full p-5 flex justify-end items-center">
          <Link href="/admin/addpost">
            <Button
              text="Add Item"
              className="w-24 bg-blue-500 text-white p-2 hover:scale-105 transition-all duration-150 cursor-pointer"
            />
          </Link>
        </div>
        <section className="w-full h-full  p-5">
          <table className="w-full h-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Edit</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {list.map((list, index) => {
                return (
                  <tr
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    } w-full text-center border`}
                  >
                    <td className=" flex justify-center items-center">
                      <div className="w-28  h-full">
                        <Image
                          src={`/${list.image}`}
                          alt="not-found"
                          width={1000}
                          height={1000}
                          className="w-full h-24"
                        />
                      </div>
                    </td>
                    <td className="border">
                      <h1 className="text-2xl">{list.title}</h1>
                    </td>
                    <td className="border">
                      <Button
                        text="Edit"
                        className="text-white bg-gray-600 p-2 w-24 hover:scale-95 transition-all duration-300 cursor-pointer"
                      />
                    </td>
                    <td className="border">
                      <Button
                        text="Delete"
                        className="text-white bg-red-500 p-2 w-24 hover:scale-95 transition-all duration-300 cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
