"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/globals.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Pin() {
useGSAP(()=> {
  const images =  document.querySelectorAll('.images');
images.forEach((image) => {
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: image,
      pin: true,
      scrub: true,
      start: () => "top top",
      end: () => '+=100%',
      markers: true,
    }
  });
  tl.addLabel('initial');
  tl.to(image.querySelectorAll('.images__item'), {
      ease: 'none',
      x: 0,
      stagger: 0.2
   });
});

  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const x = -slider.querySelector(".slider__items").offsetWidth + window.innerWidth;
    gsap.to(slider.querySelector(".slider__items"), {
      x: x,
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: true,
        start: () => "top top",
        end: () => "+=100%",
      },
    });
  });
})
  return (
    <div
      className=""
    >
      <div className="intro">Hello world</div>

      <div className="images">
        <div className="images__item">
          <img src="https://picsum.photos/500/200" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/200" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/200" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/200" />
        </div>
      </div>

      <div className="slider">
        <div className="slider__items">
          <img src="https://picsum.photos/500/700?random=1" />
          <img src="https://picsum.photos/500/700?random=2" />
          <img src="https://picsum.photos/500/700?random=3" />
        </div>
      </div>

      <div className="images">
        <div className="images__item">
          <img src="https://picsum.photos/500/250" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/250" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/250" />
        </div>
        <div className="images__item">
          <img src="https://picsum.photos/500/250" />
        </div>
      </div>

      <div className="footer">Hello world</div>
    </div>
  );
}
