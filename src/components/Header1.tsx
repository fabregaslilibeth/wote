"use client";
import React from "react";
import { Redressed } from "@next/font/google";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header1({
  content,
  id,
}: {
  content: string;
  id?: string;
}) {
  return (
    <div id={id} className={redressed.className}>
      <h1 className="text-6xl md:text-9xl">{content}</h1>
    </div>
  );
}
