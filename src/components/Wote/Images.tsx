import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ColoredBoxes = () => {
  const boxesRef = useRef([]);

  // Define the boxes with specific colors and vertical movement values
  const boxes = [
    { color: 'yellow', size: '100px', y: '50' },   // Yellow box moves 50px
    { color: 'blue', size: '120px', y: '60' },      // Blue box moves 10px
    { color: 'green', size: '80px', y: '30' },       // Green box moves 30px
    { color: 'red', size: '150px', y: '70' },        // Red box moves 20px
    { color: 'orange', size: '90px', y: '40' },      // Orange box moves 40px
  ];

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.to(
        box,
        {
          scrollTrigger: {
            trigger: box,
            start: 'top bottom', // When the box top hits the bottom of the viewport
            end: 'bottom top',   // When the box bottom hits the top of the viewport
            scrub: true,
            markers: true, // Set to true for debugging if needed
          },
          ease: 'power4.inOut',
          duration: 1,
          top: 400,
          yoyo: true, // Enable yoyo for reverse animation
        }
      );
    });
  }, []);

  return (
    <div className="relative h-[120vh] overflow-hidden">
      {boxes.map((box, index) => {
        // Generate random left positioning between 0% and 100%
        const randomLeft = Math.random() * 100; // Random percentage

        return (
          <div
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            className="absolute"
            style={{
              left: `${randomLeft}%`, // Set random left position
              top: `${box.y}%`, // Set random top position
              width: box.size, // Fixed size
              height: box.size, // Fixed size
              backgroundColor: box.color, // Set fixed color
              transition: 'width 0.5s ease, height 0.5s ease',
            }}
          />
        );
      })}
    </div>
  );
};

export default ColoredBoxes;
