import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Card(data) {
  let { image, name, price1, price2, outofstock, sale } = data;
  return (
    <>
      <div className="relative w-80 h-[680px] overflow-hidden">
        <div className="relative w-full h-[80%] flex flex-col justify-center items-center group overflow-hidden">
          <Image
            src={`/${image}`}
            alt="collection"
            width={1000}
            height={1000}
            className="w-full h-full group-hover:scale-150 object-center transition-all duration-500 z-0"
          />
          <Button
            className="absolute w-32 z-100 opacity-0 border p-2 group-hover:opacity-100 hover:bg-black hover:text-white"
            disabled={!!outofstock}
            text="shop now"
          />
        </div>
        <div className="w-full mt-5">
          <h1
            className={`text-xl uppercase ${
              sale ? "text-yellow-500 font-bold" : ""
            }`}
          >
            {name}
            {sale ? " (sale sale sale)" : ""}
          </h1>
          <p
            className={`text-black/50 mt-1 ${sale ? "line-through " : ""}`}
          >{`Rs. ${price1} - ${price2}`}</p>
        </div>
        {outofstock ? (
          <p className="bg-red-600 shadow p-2 text-white rounded-full w-20  flex items-center justify-center h-20 absolute top-3 right-2">
            {outofstock}
          </p>
        ) : (
          ""
        )}
        {sale ? (
          <p className="bg-yellow-400/70 shadow p-2 text-white rounded-full w-20  flex items-center justify-center h-20 absolute top-3 right-2">
            Rs.{sale}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
