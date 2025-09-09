"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Pin() {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });
  });


  return (
    <div
      className="container w-[500vw] h-full flex shrink-0 bg-purple-500"
      style={{ overscrollBehavior: "none" }}
    >
      <section className="panel one bg-blue-500 shrink-0 w-[100vw] h-screen">
        <h1 className="text-white text-4xl">ONE</h1>
      </section>
      <section className="panel bg-orange-500 shrink-0 w-[100vw] h-screen">
        <h1 className="text-white text-4xl">TWO</h1>
      </section>
      <section className="panel bg-purple-500 shrink-0 w-[100vw] h-screen">
        <h1 className="text-white text-4xl">THREE</h1>
      </section>
      <section className="panel bg-green-500 shrink-0 w-[100vw] h-screen">
        <h1 className="text-white text-4xl">FOUR</h1>
      </section>
      <section className="panel bg-lime-500 shrink-0 w-[100vw] h-screen">
        <h1 className="text-white text-4xl">FIVE</h1>
      </section>
    </div>
  );
}
