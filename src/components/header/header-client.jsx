"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import UserAction from "./user-action";
import { ModeToggle } from "../darkmode-toggler";

export default function HeaderClient({ session }) {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300">
      {/* <div
        className={`flex items-center justify-between px-12 py-3 mx-auto w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent mt-0"
        }`}
      > */}
      <div
        className={`flex items-center justify-between px-12 py-3 mx-auto w-full transition-all duration-300 bg-background/80 backdrop-blur-md border-b`}
      >
        <div className="font-sans font-bold text-xl text-foreground cursor-pointer">
          <Link href={"/"}>OpenFeedback</Link>
        </div>
        {/* <Navbar /> */}
        <UserAction session={session} />
        <ModeToggle />
      </div>
    </header>
  );
}
