'use client'
import React from 'react';
import { useLottie } from 'lottie-react';
import animationData from './ArrowDown.json';

const LottieAnimation = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  // const { View, play, stop } = useLottie(options);

  return (
    <div>
      <div style={{ width: 150 }}>
        {View}
      </div>
      {/* <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button> */}
    </div>
  );
};

export default LottieAnimation;
