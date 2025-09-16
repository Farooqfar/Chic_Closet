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
      image: "c2.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
    },
    {
      image: "c3.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
      outofstock: "sold out",
    },
    {
      image: "c4.webp",
      name: "sylib",
      price1: "10000",
      price2: "14000",
      sale: "5000",
    },
  ]);
  let [fCards, setFcards] = useState([
    {
      image: "collection1.webp",
      button: "new arrival",
    },
    {
      image: "c2.webp",
      button: "basic",
    },
    {
      image: "c3.webp",
      button: "feature",
    },
    {
      image: "c4.webp",
      button: "fasion",
    },
  ]);
  return (
    <>
      <main className="w-full">
        {/*  Header  */}
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
        {/*  Banner  */}
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
        {/*  new Arrival  */}
        <section className="w-full mt-10 mb-10 flex justify-center items-center flex-col">
          {/*  H1  */}
          <h1 className="text-2xl uppercase text-center font-bold">
            new arrivals
          </h1>
          {/*  Card  */}
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
        {/*  Collection  */}
        <section className="w-full mt-10 mb-10 flex justify-center items-center flex-col">
          {/*  Collection Heading  */}
          <div className="w-full flex flex-col justify-center items-center">
            {/*  H1  */}
            <h1 className="text-2xl uppercase text-center font-bold">
              collection
            </h1>
            {/*  Para  */}
            <p className="text-black/50 uppercase">all collection</p>
          </div>
          {/*  Collection Cards  */}
          <div className="w-full h-auto grid grid-cols-3 justify-items-center gap-32  mt-8 pl-32 pr-32">
            {fCards?.map((items, index) => {
              return (
                <div
                  className="relative w-96 flex flex-col justify-center items-center overflow-hidden"
                  key={index}
                >
                  <Image
                    src={`/${items.image}`}
                    alt={`collection${index}`}
                    width={1000}
                    height={1000}
                    className="w-full h-auto hover:scale-110 transition-all duration-300"
                  />
                  <Button
                    className="absolute bottom-20 bg-black text-white w-32 p-2 hover:cursor-pointer rounded hover:scale-110 transition-all duration-300 hover:bg-white hover:text-black"
                    text={items.button}
                  />
                  {console.log(items.image)}
                </div>
              );
            })}
          </div>
        </section>
        {/*  Feature Collections  */}
        <section className="w-full mt-10 mb-10 flex justify-center items-center flex-col">
          {/*  H1  */}
          <h1 className="text-2xl uppercase text-center font-bold">
            Feature Collection
          </h1>
          {/*  Features Cards  */}
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
