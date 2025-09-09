"use client";

import React from "react";
import { gsap } from "gsap";
import Banner1 from "../components/Banner1";
import FeaturedRecipes from "../components/FeaturedRecipes";
import ArtsyHeader from "../components/ArtsyHeader";
import { useGSAP } from "@gsap/react";

const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#header1",
      { opacity: 0, y: 300 },
      { opacity: 1, duration: 1, delay: 2.3, ease: "power2.out", y: 20 }
    );

    gsap.fromTo(
      ".subheaders div",
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        duration: 1,
        delay: 3.3,
        stagger: 0.5,
        ease: "power2.out",
        x: 0,
      }
    );
    gsap.fromTo(
      "#btnWrapper",
      { opacity: 0, y: -10 },
      { opacity: 1, duration: 1, delay: 6.3, ease: "power2.out", y: 0 }
    );
  });

  // const categories = ["salad", "appetizer", "mains", "breakfast", "dessert"];

  return (
    <>
      <Banner1 />

      {/* <section id="categories">
        <div className="my-20">
          <div className="flex justify-center flex-wrap gap-16">
            {categories.map((cat) => (
            <div key={cat}>
                <div className="bg-lime-200 bg-gradient-to-b from-lime-50 to-white shadow-xl duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-xl">
                <div
                  className="w-52 h-52 overflow-hidden"
                  style={{
                    background: `url(http://localhost:3000/assets/${cat}.png) center left no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              
              </div>
              <p
                  className={`${redressed.className} text-2xl text-center mt-2 capitalize`}
                >
                  {cat}
                </p>
            </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="populars">
        <div className="w-full">
          <div>
            <ArtsyHeader key="pop" content="Popular Recipes" />
          </div>
          <div className="flex justify-center pt-40 pb-20">
            <FeaturedRecipes />
          </div>
        </div>
      </section>

      <section id="blogs">
        <div className="h-screen w-full">
          <ArtsyHeader
            key="blogs"
            content="Blogs"
            class1="bg-accentRose top-8 w-12 md:w-16 xl:w-64"
            class2="bg-accentLavender top-2 w-6/12 md:w-8/12 lg:w-9/12 h-8"
            class3="border-accentLavender bottom-12 min-w-64 left-8 md:left-12 xl:left-56 top-4 min-h-14"
          />

          <div className="flex justify-center"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
