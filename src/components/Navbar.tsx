"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip);

const Navbar = () => {
  useEffect(() => {
    const showAnim = gsap
      .from(".navbar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const flipAnimation = Flip.fit(".logo", ".newContainer", {
      duration: 3,
      scale: true,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      animation: flipAnimation,
      markers: true,
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
      <nav className="navbar fixed top-0 left-0 w-full bg-gray-600 z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="newContainer w-60 h-24"></div>
            {/* Menu Items */}
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="originalContainer relative h-screen flex justify-center bg-gray-100">
        <div className="shrink-0 logo fixed z-20">
          <a href="/" className="grayscale">
            <img src="http://localhost:3000/assets/beatles/beatles-logo.png" alt="" className="w-[900px]"/>
          </a>
        </div>
        <div className="absolute bottom-0 bg-fixed w-full h-full" 
            style={{
                backgroundImage: "url(http://localhost:3000/assets/beatles/beatles-faces.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
            }}>
        </div>
      </div>
    </>
  );
};

export default Navbar;
