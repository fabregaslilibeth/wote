'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ColorDropEffect = () => {
  // Initialize a mutable array to store multiple div refs
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      boxesRef.current,
      { height: '0px' },
      {
        height: (i) => (i === 0 || i === 4 ? '60vh' : i === 2 ? '45vh' : '25vh'),
        duration: 3,
        ease: 'bounce.out',
        stagger: {
          each: 0.2,
          from: 'random',
        },
      }
    );
  }, []);

  const gradientColors = [
    'linear-gradient(to bottom, #5F7373, transparent)',
    'linear-gradient(to bottom, #A1A5A6, transparent)',
    'linear-gradient(to bottom, #DEEFE7, transparent)',
    'linear-gradient(to bottom, #0D2626, transparent)',
    'linear-gradient(to bottom, #050B0D, transparent)',
  ];

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      {gradientColors.map((gradient, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              boxesRef.current[index] = el; // Assign each div ref into the array
            }
          }}
          style={{
            background: gradient,
            width: '20%',
            transformOrigin: 'top',
          }}
        />
      ))}
    </div>
  );
};

export default ColorDropEffect;
