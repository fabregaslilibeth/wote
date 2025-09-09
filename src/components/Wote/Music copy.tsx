import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Special_Elite } from "@next/font/google";
import { albums } from '@/assets/js/albums.js'

gsap.registerPlugin(Flip, ScrollTrigger);

interface AlbumDetails {
  color?: string;
  bgColor: string;
  image: string;
  text: string;
  songList: string[];
  yearReleased: string;
}

interface AlbumGrid {
  id: number;
  text: string;
  yearReleased: string;
  songList: string[];
  image: string;
  bgColor: string;
  initialColSpan: number;
  initialRowSpan: number;
  toggledColSpan: number;
  toggledRowSpan: number;
}

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

const Music = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [mappedAlbums, setMappedAlbums] = useState<AlbumGrid[]>([]);

  useEffect(() => {
    gsap.utils.toArray('.grid-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Adjust start point
          toggleActions: "play none none reverse", // Actions to take on enter/leave
          markers: true
        },
        opacity: 0,
        // y: 50,
        duration: 1,
      });
    });
  }, [mappedAlbums]);

  useEffect(() => {
   const updatedAlbums: AlbumGrid[] = albums.map((item: AlbumDetails, index: number) => ({
      id: index + 1,
      text: item.text,
      yearReleased: item.yearReleased,
      songList: item.songList,
      image: item.image,
      bgColor: item.bgColor,
      initialColSpan: 1,
      initialRowSpan: 1,
      toggledColSpan: [0, 2, 4, 5, 6, 8].includes(index) ? 2 : 1,
      toggledRowSpan: [1, 3, 7].includes(index) ? 2 : 1,
    }));
    setMappedAlbums(updatedAlbums);
  }, []);
  
  const animateGridLayoutChange = () => {
    const state = Flip.getState(".grid-item");
    setIsToggled((prev) => !prev);
    setTextVisible(false);
    setTimeout(() => {
      Flip.from(state, {
        duration: 1.5,
        ease: "power4.out",
        absolute: true,
        onComplete: () => setTextVisible(true),
      });
    }, 50);
  };


  return (
    <div className="flex flex-col items-center gap-4 w-6/12 h-96 mx-auto p-20">
      <div className={`${specialElite.className} text-4xl`}>
        <h1>DISCOGRAPHY</h1>
      </div>

      <label className="inline-flex items-center me-5 cursor-pointer">
        <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isToggled ? "With Details" : "Without Details"}
        </span>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isToggled} // Control checkbox state
          onChange={animateGridLayoutChange} // Handle checkbox change
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
      </label>

      <div className="grid grid-cols-3 gap-4 w-full h-full transition-all duration-500">
        {mappedAlbums.map((item, index) => (
          <div
            key={item.id}
            style={{ zIndex: albums.length - index }} // Set z-index dynamically
            className={`${
              isToggled
                ? `col-span-${item.toggledColSpan} row-span-${item.toggledRowSpan}`
                : `col-span-${item.initialColSpan} row-span-${item.initialRowSpan}`
            } ${item.bgColor} ${item.toggledRowSpan === 2 && "flex-col"} 
           grid-item flex items-center relative rounded-md w-full h-full min-h-48 overflow-hidden shadow-custom`}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-[331px] h-auto object-cover rounded-md"
            />

            <div
              className={`text text-center rounded-md w-full h-full transition-opacity duration-500 text-white uppercase${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white text-2xl capitalize">
                {item.text}
                <span className="text-xs">({item.yearReleased})</span>
              </div>
              <div>
                {item.songList.map((song, index) => (
                  <span key={index} className="text-white text-sm mx-1">
                    {song} •
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
