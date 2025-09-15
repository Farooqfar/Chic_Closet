"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import Button from "./components/Button";
import Card from "./components/Card";
import { useState } from "react";
export default function Home() {
  let [cards, setCards] = useState([
    {
      image: "collection1.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
    },
    {
      image: "collection1.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
    },
    {
      image: "collection1.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
      outofstock: "sold out",
    },
    {
      image: "collection1.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
      sale: "5000",
    },
  ]);
  return (
    <>
      <main className="w-full">
        <header className="w-full flex justify-around items-center">
          <Image src="/logo.webp" alt="logo" width={150} height={150} />

          <Nav />
          <div className="flex justify-center items-center gap-1">
            <Button className="text-3xl" text={<CiSearch />} />
            <Button className="text-3xl font-light" text={<VscAccount />} />
            <div className="flex justify-center items-center">
              <Button className="text-3xl " text={<CiShoppingCart />} />
              <Button
                className="bg-black text-white text-sm w-5 rounded-full"
                text="1"
              />
            </div>
          </div>
        </header>
        <main>
          <div>
            <Image
              src="/banner.webp"
              alt="banner"
              width={1000}
              height={1000}
              className="w-full h-screen"
            />
          </div>
        </main>
        <section className="w-full mt-10 mb-10 flex justify-center items-center flex-col">
          <h1 className="text-2xl uppercase text-center font-bold">
            new arrivals
          </h1>
          <div className="w-full h-auto grid grid-cols-4 justify-items-center gap-32  mt-8 pl-32 pr-32">
            {cards.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  name={item.name}
                  price1={item.price1}
                  price2={item.price2}
                  outofstock={item.outofstock}
                  sale={item.sale}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
