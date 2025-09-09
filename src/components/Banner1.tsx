"use client";
import React from "react";
import { gsap } from "gsap";
import Header1 from "./Header1";
import Header5 from "./Header5";
import { useGSAP } from "@gsap/react";

const Banner1 = () => {
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
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-11/12 h-2/3 mx-2">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <div className="h-24 md:h-36 overflow-hidden">
              <Header1 id="header1" content="Gourmet Plates" />
            </div>
            <div className="subheaders">
              <Header5
                id="subheader1"
                content="Your daily dose of culinary inspiration"
                classes="md:text-left md:ml-20"
              />
              <Header5
                id="subheader2"
                content="Nourishing meals made easy"
                classes="md:text-right md:mr-20"
              />
            </div>
            <div id="btnWrapper" className="mt-24">
              <button
                type="button"
                className=" px-6 py-2 bg-[#A1E039] rounded-sm"
              >
                <span className="font-bold tracking-wide text-lg text-white">
                  EXPLORE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
