"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Butterfly = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#falling",
        start: "20px top", // 20% of the box hits 80% of the viewport (80% from the top of the viewport)
        end: "bottom 30%", // bottom of the box hits 30% of the viewport (from the top)
        toggleActions: "play none reverse none",
      },
    });

    tl.to("#falling", {
      x: 600,
      y: 400,
      rotation: 360,
      duration: 3,
      ease: "power2.out",
    });

    tl.to("#falling", {
      x: 200,
      y: 600,
      rotation: 60,
      duration: 3,
      backgroundColor: "green",
      ease: "power2.out",
    });

    tl.to("#falling", {
      x: 800,
      y: 900,
      rotation: 160,
      duration: 3,
      backgroundColor: "red",
      ease: "power2.out",
    });

    // Clean up on component unmount
  }, []); // empty dependency array to ensure this runs only once after component mounts
  return (
    <>
      <div className={styles.fixedSection}>
        <div className={styles.butterflyTrack}>
          <div id="falling" className={styles.butterfly}>
            AAA
          </div>
          <div className={styles.guide}></div>
        </div>
      </div>
      <div className={styles.normalSection}></div>
      <div className={styles.normalSection}></div>
      <div className={styles.normalSection}></div>
      <div className={styles.normalSection}></div>
    </>
  );
};

export default Butterfly;
