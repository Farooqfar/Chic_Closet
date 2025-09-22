"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import Button from "./Button";
export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`w-full flex justify-around items-center ${
        pathname === "/admin" ? "hidden" : ""
      }`}
    >
      <Image src="/logo.webp" alt="logo" width={150} height={150} />
      <Nav />
      <div className="flex justify-center items-center gap-1">
        <Button
          className="text-3xl cursor-pointer hover:scale-95 transition-all duration-200"
          text={<CiSearch />}
        />
        <Link href="/login">
          <Button
            className="text-3xl text-gray-500 font-light cursor-pointer hover:scale-95 transition-all duration-200"
            text={<MdAccountCircle />}
          />
        </Link>
        <div className="flex justify-center items-center">
          <Button
            className="text-3xl cursor-pointer hover:scale-95 transition-all duration-200"
            text={<CiShoppingCart />}
          />
          <Button
            className="bg-gray-500 text-white text-sm w-5 rounded-full  hover:scale-95 transition-all duration-200"
            text="1"
          />
        </div>
      </div>
    </header>
  );
}
