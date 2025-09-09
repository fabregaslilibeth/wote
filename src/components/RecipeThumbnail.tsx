"use client";
import React from "react";
import "@/app/globals.css";
import Header6 from "./Header6";
import Stars from "./Stars";
import HealthScoreIcon from "./icons/HealthScoreIcon";
import DollarIcon from "./icons/DollarIcon";

type Recipe = {
  id: number;
  image: string;
  title: string;
  summary: string;
  healthScore: number;
  pricePerServing: number;
};

export default function RecipeThumbnail({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <div
              className="image w-72 h-72 border-5 border-gray-500"
              style={{
                background: `url(${recipe.image}) center center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="absolute left-0 right-0 bottom-0 bg-opacity-50 bg-gradient-to-r from-lime-700 to-transparent text-white text-left px-4 py-1">
              <Header6 content={recipe.title} />
            </div>
          </div>
          {/* Back Side */}
          <div className="flip-card-back bg-lime-800">
            <div className="detailsWrapper p-4 text-center flex flex-col justify-between h-full">
              <div>
                <Header6 content={recipe.title} />
                <Stars rating={2.5} />
              </div>

              <div className="summary my-2 text-sm h-28 overflow-hidden">
                {recipe.summary}
              </div>

              <div className="flex justify-center my-2 gap-4 pb-4">
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <HealthScoreIcon />
                    <p>{recipe.healthScore}</p>
                  </div>
                  <p className="text-xs">Health Score </p>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-2">
                    <DollarIcon />
                    <p>{recipe.pricePerServing}</p>
                  </div>
                  <p className="text-xs">Price/serving</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
