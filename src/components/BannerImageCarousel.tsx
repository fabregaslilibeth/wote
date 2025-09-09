"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const BannerImageCarousel = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".food .up",
        start: "50% 50%", // 20% of the box hits 80% of the viewport (80% from the top of the viewport)
        end: "bottom 0%", // bottom of the box hits 30% of the viewport (from the top)
        //  toggleActions: "play pause reverse pause",
        scrub: 2,
        markers: true
      },
    });

    tl.to(".food .up", {
      y: 50,
      scrub: 1,
      duration: 1,
      ease: "power2.ot",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".food .down",
        start: "45% 50%", // 20% of the box hits 80% of the viewport (80% from the top of the viewport)
        end: "bottom 0%", // bottom of the box hits 30% of the viewport (from the top)
        //toggleActions: "restart pause reverse none",
        scrub: 2,
        markers: true
      },
    });

    tl2.to(".food .down", {
      y: -40,
      duration: 2,
      ease: "power2.out",
    });

    // tl2.to(".food .down", {
    //   y: -80,
    //   duration: 2,
    //   ease: "power2.out",
    // });

    // tl2.to(".food .down", {
    //   y: -120,
    //   duration: 2,
    //   ease: "power2.out",
    // });
  }, []);

  return (
    <>
      <div className="h-[780px] overflow-hidden relative">
        <div className="absolute right-64 -top-52 transform rotate-[22deg] w-[1000px]">
          <div className="food grid grid-cols-4">

            <div id="sss" className="up">
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div id="col2" className="down -mt-24">
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div id="sss" className="up">
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div id="col2" className="down -mt-24">
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-60 h-64 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div id="sss" className="up">
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="border border-gray-500 w-44 h-48 my-3"
                style={{
                  background: `url(https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600) center center`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImageCarousel;
