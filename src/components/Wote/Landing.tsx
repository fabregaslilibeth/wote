"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { ScrollTrigger } from "gsap/all";
import { Special_Elite, Just_Another_Hand } from "@next/font/google";
import ArrowDown from "@/components/Lotties/ArrowDown";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

const jah = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(ScrollTrigger, Flip);

export default function Landing() {
  const textRefs = useRef<HTMLHeadingElement[]>([]);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);
  const nameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !textRefs.current) return;

    const tl = gsap.timeline();

    // Typing effect for each line including the dash
    textRefs.current.forEach((textElement, index) => {
      const chars = textElement.textContent?.split('') || [];
      textElement.innerHTML = chars.map(char => `<span style="opacity: 0">${char}</span>`).join('');
      const charSpans = Array.from(textElement.children) as HTMLElement[];

      tl.to(
        charSpans,
        {
          opacity: 1,
          duration: 0.1,
          stagger: 0.1,
          ease: "power1.inOut",
        },
        `+=${index === 0 ? 0 : 0.5}`
      );
    });

    // Fade out first two lines and the dash
    tl.to(
      [textRefs.current[0], textRefs.current[1]],
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      },
      "+=1"
    );

    // Fade out the dash, keep "Walk Off The Earth" visible
    tl.to(
      textRefs.current[2].children[0],
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );

    // First Flip animation to move WOTE to `.name` container
    tl.add(() => {
      const flipState = Flip.getState(textRefs.current[2]);
      nameContainerRef.current!.appendChild(textRefs.current[2]);

      Flip.from(flipState, {
        duration: 1.5,
        scale: true,
        ease: "power1.out",
      });
    }, "+=1");

    // After first Flip animation, dissolve members and show arrow
    tl.to(
      membersRef.current,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "+=1"
    ).to(
      ".arrow",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      ">"
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Second Flip animation triggered on scroll to move WOTE to `.newContainer`
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onEnter: () => {
        const flipState = Flip.getState(".name h1");
        const newContainer = document.querySelector(".newContainer");

        if (newContainer) {
          newContainer.appendChild(document.querySelector(".name h1")!);
          Flip.from(flipState, {
            duration: 1.5,
            scale: true,
            ease: "power1.out",
          });
        }
      },
    });
  }, []);

  useEffect(() => {
    const showAnim = gsap
      .from(".navbar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
            showAnim.play();
        } else {
            showAnim.reverse();
        }
      },
    });
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full bg-purple-300 z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className={`${jah.className} flex justify-between h-16 text-4xl`}>
            {/* Logo */}
            <div className="newContainer w-60"></div>
            {/* Menu Items */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#F2D3E7] h-screen flex items-end relative overflow-hidden w-screen">
        <div className="p-4">
          <div ref={nameContainerRef} className={`${specialElite.className} name absolute left-1/2 top-20 -translate-x-1/2 h-96 w-11/12 text-center text-9xl`}></div>
          <div
            ref={membersRef}
            className="members absolute bottom-0 bg-fixed w-full h-full opacity-0 z-20"
            style={{
              backgroundImage: "url(http://localhost:3000/assets/wote/wote.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="arrow absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 z-30">
            <ArrowDown />
          </div>

          <div className={`${specialElite.className} text-4xl`}>
            <h1 ref={(el) => el && textRefs.current.push(el)}>
              I was looking for answers
            </h1>
            <h1 ref={(el) => el && textRefs.current.push(el)} className="pl-12">
              but I found an anthem instead.
            </h1>
            <h1 ref={(el) => el && textRefs.current.push(el)} className="text-center">
              <span>-</span> Walk Off The Earth
            </h1>
            <span ref={cursorRef} style={{ opacity: 1, marginLeft: "4px" }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
