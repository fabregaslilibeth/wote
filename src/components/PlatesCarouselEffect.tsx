'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlatesCarouselEffect = () => {
  // Ref array should be able to hold div elements or null
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  //const width = Math.min(document.documentElement.clientWidth, 1980);
  const width = 1980;
  const len = Math.floor(width / 80);
  const length = len < 10 ? len : 10;

  const minSize = width / length;
  const size = minSize;
  const positions = Array.from({ length }, (_, i) => i * size);

  const first = positions[0];
  const last = positions[positions.length - 1];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    const moveBoxes = () => {
      positions.unshift(positions.pop()!);

      gsap.to(boxesRef.current, {
        x: (index) => positions[index],
        duration: 2.5,
        ease: 'power2.inOut',
        opacity: 1,
        onComplete: () => {
          boxesRef.current.forEach((box, index) => {
            if (!box) return; // Skip if ref is null
            const currentLeft = positions[index];

            if (currentLeft === first) {
              gsap.to(box, {
                scale: 1.8,
                duration: 2.5,
                rotate: 360,
                ease: 'power2.inOut',
                zIndex: 100,
              });
            } else if (currentLeft === last) {
              gsap.to(box, {
                scale: 1,
                duration: 2.5,
                ease: 'power2.inOut',
                zIndex: 1,
              });
            } else {
              gsap.to(box, {
                scale: 1,
                duration: 2.5,
                ease: 'power2.inOut',
                zIndex: 10,
              });
            }
          });
        },
      });
    };

    const interval = setInterval(moveBoxes, 3000);

    return () => clearInterval(interval);
  }, [positions, first, last]);

  return (
    <div className="absolute bottom-52">
      {positions.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            boxesRef.current[index] = el; // Assign ref directly by index
          }}
          className="absolute opacity-0 rounded-full bottom-0"
          style={{
            width: size + 'px',
            height: size + 'px',
            background: `url('${baseUrl}/assets/plate1.png') center center no-repeat`,
            backgroundSize: 'cover',
            zIndex: index === 0 ? 100 : 10, // Ensure the first box always has higher zIndex initially
          }}
        />
      ))}
    </div>
  );
};

export default PlatesCarouselEffect;
