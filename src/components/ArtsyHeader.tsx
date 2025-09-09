"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Redressed } from "@next/font/google";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

const ArtsyHeader = ({
  content,
  class1 = "bg-accentGreen w-12 md:w-40",
  class2 = "bg-accentAqua top-12 w-6/12 md:w-8/12 xl:w-10/12 h-6",
  class3 = "border-accentGreen top-3 left-8 md:left-32 min-w-64 min-h-14",
}: {
  content: string;
  class1?: string;
  class2?: string;
  class3?: string;
}) => {
  useGSAP(() => {
    gsap.fromTo(
      "#header1",
      { opacity: 0, y: 300 },
      { opacity: 1, duration: 1, delay: 2.3, ease: "power2.out", y: 20 }
    );

    gsap.fromTo(
      ".subheaders div",
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        duration: 1,
        delay: 3.3,
        stagger: 0.5,
        ease: "power2.out",
        x: 0,
      }
    );
    gsap.fromTo(
      "#btnWrapper",
      { opacity: 0, y: -10 },
      { opacity: 1, duration: 1, delay: 6.3, ease: "power2.out", y: 0 }
    );
  });

  return (
    <div className="relative h-50 w-full">
      <div className={`absolute h-12 shadow-custom ${class1}`}></div>
      <div className={`absolute right-0 shadow-custom ${class2}`}></div>
      <div
        className={`absolute border-2 shadow-xl bg-white shadow-custom ${class3}`}
      >
        <div className="text-2xl md:text-3xl flex items-center justify-center p-2">
          <h4 className={redressed.className}>{content}</h4>
        </div>
      </div>
    </div>
  );
};

export default ArtsyHeader;
