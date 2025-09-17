"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

export default function Product() {
  const [size, setSize] = useState("s");
  const sizes = ["s", "m", "x", "xl"];
  const [style, setStyle] = useState("dupata");
  const styles = ["dupata", "withOutDupata"];
  const [select_Item_No, setSelect_Item_No] = useState(0);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(style);
    console.log(size);
    console.log(select_Item_No);
  };
  return (
    <>
      <main className="w-full h-full flex justify-center gap-20 items-center p-10">
        <section className="w-100 h-full overflow-hidden">
          <Image
            src="/c2.webp"
            width={1000}
            height={1000}
            alt="Image"
            className="w-100 h-full hover:scale-125 transition-all duration-300"
          />
        </section>
        <section className="w-[50%] h-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold uppercase">sybil</h1>
            <p className="text-xl text-black/50 uppercase">RS 13000</p>
            <p className="text-black/80">Tax Include</p>
            <p>
              The perfect white ensemble for the festive vibe, red detailing on
              the neckline embellished with buttons , beautiful lace appliqué on
              the sleeves , scallop cutwork detailing on the hemline with...
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Size {size}</h1>
            <div className="flex gap-2">
              {sizes.map((sizes, index) => {
                return (
                  <label
                    className="flex items-center gap-3 cursor-pointer w-10"
                    key={index}
                  >
                    <input
                      type="radio"
                      value="Xs"
                      className="hidden peer"
                      onChange={() => setSize(sizes)}
                      checked={size === sizes}
                    />
                    <span className="w-full uppercase  text-center text-md p-1 border rounded-full peer-checked:bg-black peer-checked:text-white transition-all duration-300">
                      {sizes}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="transition-all duration-300">Style : {style}</h1>
            <div className="flex gap-2">
              {styles.map((s, index) => {
                return (
                  <label
                    className="peer w-atuo flex items-center cursor-pointer transition-all duration-300"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="style"
                      className="hidden peer"
                      checked={style === s}
                      onChange={() => setStyle(s)}
                    />
                    <span className="w-[100%] border uppercase text-center p-2 rounded-full peer-checked:bg-black peer-checked:text-white transition-all duration-300">
                      {s}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex  gap-2.5 mt-4">
            <div className="flex justify-around items-center border rounded-full w-34">
              <button
                className="text-2xl font-black cursor-pointer"
                onClick={() => setSelect_Item_No(select_Item_No - 1)}
                disabled={select_Item_No <= 0}
              >
                {<AiOutlineMinus />}
              </button>

              <h1 className="text-2xl">{select_Item_No}</h1>
              <button
                className="text-2xl font-black cursor-pointer"
                onClick={() => setSelect_Item_No(select_Item_No + 1)}
                disabled={select_Item_No >= 5}
              >
                {<GoPlus />}
              </button>
            </div>
            <button
              className="w-34  rounded-full p-2 text-white text-xl bg-black"
              onClick={handleForm}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h1>Ask a Question</h1>
            <h1>Categories: RAMADAN ESSENTIALS'25 - FESTIVE COLLECTION</h1>
          </div>
        </section>
      </main>
    </>
  );
}
