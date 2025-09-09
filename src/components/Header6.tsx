'use client'
import React from "react";
import { Klee_One } from '@next/font/google'

const kleeOne = Klee_One({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Header6({
    content,
    classes = '',
    id,
  }: {
    content: string;
    classes?: string;
    id?: string;
  }) {
  return (
    <div id={id} className={kleeOne.className}>
      <h5 className={`${classes} text-lg md:text-xl text-ellipsis overflow-hidden`}>{content}</h5>
    </div>
  );
}
