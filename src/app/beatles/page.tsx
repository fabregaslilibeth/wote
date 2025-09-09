"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Navbar from "../../components/Navbar";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Beatles = () => {
  useEffect(() => {
    const panelsContainer = document.querySelector("#panels-container");
    // Panels animation
    const panels = gsap.utils.toArray("#panels-container .panel");
    const tween = gsap.fromTo(
      panels,
      {
        xPercent: 0,
      },
      {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#panels-container",
          pin: true,
          start: "top top",
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          end: () => "+=" + (panelsContainer.offsetWidth - window.innerWidth),
        },
      }
    );

    // Main navigation
    document.querySelectorAll(".anchor").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetElem = document.querySelector(
          e.target.getAttribute("href")
        );
        let y = targetElem;

        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          const totalScroll =
            tween.scrollTrigger.end - tween.scrollTrigger.start;
          const totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          y = Math.round(
            tween.scrollTrigger.start +
              (targetElem.offsetLeft / totalMovement) * totalScroll
          );
        }

        gsap.to(window, {
          scrollTo: { y, autoKill: false },
          duration: 1,
        });
      });
    });

    // Clean up on component unmount
    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div id="page" className="site">
      <div id="feather" className="feather"></div>
      <main id="content" className="site-content" role="main">
        <Navbar />

        <section id="panels" className="">
          <div
            id="panels-container"
            style={{ width: "500%" }}
            className="h-screen overflow-hidden flex p-0 h-screen"
          >
            <article
              id="panel-1"
              className="panel bg-lime-200 relative w-[100%] h-screen overflow-hidden"
            >
              <div className="">
                <div className="row">
                  <div className="col-6">
                    <h2>Panel 1</h2>
                  </div>
                </div>
              </div>
            </article>

            <article
              id="panel-2"
              className="panel bg-red-200 relative w-[100%] h-screen overflow-hidden bg-fixed"
              style={{
                backgroundImage:
                  "url(https://cdn.britannica.com/73/241073-050-ACF77332/The-Beatles-Album-cover-of-the-record-Sgt-Peppers-Lonely-Hearts-Club-Band-1967.jpg?w=400&h=300&c=crop)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            >
              <div className="">
                <div className="row">
                  <div className="col-6 d-flex">
                    <h2>Panel 2</h2>
                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article
              id="panel-3"
              className="panel bg-blue-200 relative w-[100%] h-screen overflow-hidden"
            >
              <div className="">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 3</h2>
                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="panels-navigation">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-2" className="anchor">
                          Prev
                        </a>
                      </div>
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-4" className="anchor">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article
              id="panel-4"
              className="panel bg-red-200 relative w-[100%] h-screen overflow-hidden"
            >
              <div className="">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 4</h2>
                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="panels-navigation">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-3" className="anchor">
                          Prev
                        </a>
                      </div>
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-5" className="anchor">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article
              id="panel-5"
              className="panel bg-green-200 relative w-[100%] h-screen overflow-hidden"
            >
              <div className="">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 5</h2>
                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="panels-navigation text-right">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-4" className="anchor">
                          Prev
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="map" className="full-screen gradient-orange"></section>
      </main>
    </div>
  );
};

export default Beatles;
