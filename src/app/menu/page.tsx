"use client";
import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
//import "./flip.css";

gsap.registerPlugin(Flip);

export default function FlipPage() {
  const toggleContainer = () => {
    const box = document.querySelector(".box");
    
    // const originalContainer = document.querySelector(".originalContainer");
    // const newContainer = document.querySelector(".newContainer");
    const state = Flip.getState(box);
      // Move the box to the new container
      // if (box?.parentNode === originalContainer) {
      //   newContainer.appendChild(box);
      // } else {
      //   originalContainer.appendChild(box);
      // }

    // Flip.from(state, {
    //   duration: 1.2,
    //   //scale: true,
    //   ease: "power1.inOut",
    //   }
    // )

    Flip.fit('.box','.newContainer', {
      duration: 1.2,
      scale: true,
      ease: "power1.inOut",
      }
    )
    console.log(state);
  }

  return (
    <div id="flip" className="relative">
      <div className="originalContainer">
        <div className="box w-40 h-40 bg-red-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis officia sequi,</div>
        <div className="newContainer absolute rotate-[-25deg] right-20 top-20 bg-lime-200 w-96 h-96 ">

        </div>
      </div>
      <button onClick={toggleContainer}>Change</button>
    </div>
  );
}
