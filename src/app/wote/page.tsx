"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Landing from '@/components/Wote/Landing'
import Music from '@/components/Wote/Music'
import RandomImages from '@/components/Wote/Images'

const Wote = () => {

  return (
    <>
     <Landing />
     {/* <RandomImages /> */}
     <Music />
    </>
  );
};

export default Wote;
