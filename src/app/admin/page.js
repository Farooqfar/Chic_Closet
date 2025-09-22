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
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list) => {
                return (
                  <tr>
                    <td>
                      <div className="w-32 h-full">
                        <Image
                          src={`/${list.image}`}
                          alt="not-found"
                          width={1000}
                          height={1000}
                          className="w-full h-full"
                        />
                      </div>
                    </td>
                    <td>
                      <h1 className="text-2xl">{list.title}</h1>
                    </td>
                    <td>
                      <Button
                        text="Edit"
                        className="text-white bg-gray-600 p-2 w-24 hover:scale-95 transition-all duration-300 cursor-pointer"
                      />
                    </td>
                    <td>
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
