"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./style.css";

export default function SeamlessScrollGallery() {
  const galleryRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useGSAP(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const spacing = 0.1; // spacing of the cards (stagger)
    const snap = gsap.utils.snap(spacing); // snap the playhead on the seamlessLoop
    const cards = gsap.utils.toArray(".cards li");
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    let iteration = 0; // keep track of iteration

    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "+=3000",
      pin: ".gallery",
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * seamlessLoop.duration()
          );
          scrub.invalidate().restart();
          self.wrapping = false;
        }
      }
    });

    function wrapForward(trigger) {
      iteration++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger) {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime) {
      const progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
      }
    }

    nextButtonRef.current.addEventListener("click", () => {
      scrubTo(scrub.vars.totalTime + spacing);
    });

    prevButtonRef.current.addEventListener("click", () => {
      scrubTo(scrub.vars.totalTime - spacing);
    });

    return () => {
      trigger.kill();
      scrub.kill();
      seamlessLoop.kill();
    };
  }, []);

  // Build the seamless loop as per the original function
  function buildSeamlessLoop(items, spacing) {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        if (this._time === this._dur) {
          this._tTime += this._dur - 0.01;
        }
      }
    });

    const l = items.length + overlap * 2;
    let time = 0;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (let i = 0; i < l; i++) {
      const index = i % items.length;
      const item = items[index];
      time = i * spacing;
      rawSequence.fromTo(
        item,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false },
        time
      ).fromTo(
        item,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
        time
      );
    }

    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none"
    }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: "none"
    });

    return seamlessLoop;
  }

  return (
    <div className="body">
      <div className="gallery" ref={galleryRef}>
        <ul className="cards">
          {/* Card items */}
          {[...Array(30)].map((_, index) => (
            <li key={index}>Item {index + 1}</li>
          ))}
          {/* Add more items as needed */}
        </ul>
      </div>
      <button className="prev" ref={prevButtonRef}>Previous</button>
      <button className="next" ref={nextButtonRef}>Next</button>
    </div>
  );
}
