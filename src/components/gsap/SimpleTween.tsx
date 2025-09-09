"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const SimpleTween = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#c",
        start: "20px 60%", // 20% of the box hits 80% of the viewport (80% from the top of the viewport)
        end: "bottom 30%", // bottom of the box hits 30% of the viewport (from the top)
        toggleActions: "restart pause reverse none",
        markers: true,
      },
    });

    tl.to("#c", {
      x: 400,
      rotation: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.out", // smooth animation
    });

    // Clean up on component unmount
  }, []); // empty dependency array to ensure this runs only once after component mounts

  return (
    <>
      <section id="blogs">
        <div className="h-[150vh] w-screen relative flex items-center">
          <div id="c" className="box w-20 h-20 bg-lime-200">
            C
          </div>
        </div>
      </section>
    </>
  );
};

export default SimpleTween;
