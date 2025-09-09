"use client";
import React from "react";
import GrayStarIcon from "./icons/GrayStarIcon";
import StarIcon from "./icons/StarIcon";
import HalfStarIcon from "./icons/HalfStarIcon";

export default function Stars({
  rating,
  classes = "",
  id,
}: {
  rating: number;
  classes?: string;
  id?: string;
}) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 === 0.5;
  const grayStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`starsWrapper flex justify-center ${classes}`} id={id}>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} />
      ))}
      {halfStar && <HalfStarIcon />}
      {[...Array(grayStars)].map((_, index) => (
        <GrayStarIcon key={index} />
      ))}
    </div>
  );
}
