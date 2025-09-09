"use client";

import React from "react";
import Navbar from '@/components/Navbar'
import Pin from "../components/gsap/Pin";

const Home = () => {

  return (
    <>
    <div className="overflow-hidden w-screen">
      <Navbar />
      <Pin />
    </div>
    </>
  );
};

export default Home;
