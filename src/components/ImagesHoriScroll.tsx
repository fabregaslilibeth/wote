import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImagesHoriScroll = () => {
  useEffect(() => {
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      
      gsap.utils.toArray('section').forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(wrapper, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        });
      });
    };

    showDemo(); // Directly call the demo function
  }, []);

  const randomImages = Array.from({ length: 4 }, (_, i) => (
    <section className="demo-gallery" key={i}>
      <ul className="wrapper flex">
        {Array.from({ length: 6 }).map((_, j) => (
          <li key={j} className="m-4"> {/* Added margin-right to space out items */}
            <div className='bg-lime-200 w-96 h-96'></div> {/* Placeholder div */}
          </li>
        ))}
      </ul>
    </section>
  ));

  return (
    <div className="demo-wrapper">
      {randomImages}
      <div className="h-screen"></div>
    <div className="h-screen"></div>
    <div className="h-screen"></div>
    </div>
   
  );
};

export default ImagesHoriScroll;
