"use client";
import React, { useEffect, useState } from "react";
import RecipeThumbnail  from './RecipeThumbnail'

type Recipe = {
  id: number;
  image: string;
  title: string;
  summary: string;
  healthScore: number;
  pricePerServing: number;
};

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const dummyRecipes: Recipe[] = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        title: "Summer Salad With Feta Cheese Wrapped in a Buurito",
        healthScore: 95,
        pricePerServing: 4.99,
        summary: "A refreshing summer salad wrapped in a burrito, featuring feta cheese and a blend of fresh vegetables. This dish is a perfect blend of flavors and textures, with a health score of 95 and priced at $4.99 per serving.",
      },
      {
        id: 2,
        image: "https://i1.adis.ws/i/canon/pro-inside-professional-food-photography-1_46a998f373b44dc583ee52d9448ece04?$media-collection-full-dt-jpg$",
        title: "Veggie Wrap",
        healthScore: 85,
        pricePerServing: 3.99,
        summary: "A flavorful and healthy veggie wrap packed with a variety of vegetables and a hint of spices. This wrap scores 85 on the health scale and is priced at $3.99 per serving.",
      },
      {
        id: 3,
        image: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/famous-food-photographers-1.jpg",
        title: "Quinoa Bowl",
        healthScore: 90,
        pricePerServing: 5.99,
        summary: "A nutritious quinoa bowl filled with roasted vegetables, lean proteins, and a drizzle of your favorite sauce. This bowl scores 90 on the health scale and is priced at $5.99 per serving.",
      },
      {
        id: 4,
        image: "https://via.placeholder.com/300",
        title: "Grilled Chicken",
        healthScore: 80,
        pricePerServing: 6.99,
        summary: "Tender and juicy grilled chicken breast, seasoned to perfection and served with a side of your choice. This dish scores 80 on the health scale and is priced at $6.99 per serving.",
      },
      {
        id: 5,
        image: "https://via.placeholder.com/300",
        title: "Lentil Soup",
        healthScore: 95,
        pricePerServing: 4.99,
        summary: "A hearty and comforting lentil soup made with red lentils, aromatic spices, and a touch of creaminess. This soup scores 95 on the health scale and is priced at $4.99 per serving.",
      },
      {
        id: 6,
        image: "https://via.placeholder.com/300",
        title: "Roasted Vegetable Salad",
        healthScore: 98,
        pricePerServing: 5.99,
        summary: "A vibrant salad featuring a medley of roasted vegetables, mixed greens, and a tangy dressing. This salad scores 98 on the health scale and is priced at $5.99 per serving.",
      },
      {
        id: 7,
        image: "https://via.placeholder.com/300",
        title: "Spinach and Feta Stuffed Chicken",
        healthScore: 92,
        pricePerServing: 7.99,
        summary: "Tender chicken breast stuffed with a flavorful mixture of spinach, feta cheese, and herbs, then baked to perfection. This dish scores 92 on the health scale and is priced at $7.99 per serving.",
      },
      {
        id: 8,
        image: "https://via.placeholder.com/300",
        title: "Quinoa and Black Bean Bowl",
        healthScore: 96,
        pricePerServing: 6.99,
        summary: "A nutritious bowl filled with quinoa, black beans, roasted vegetables, and a drizzle of your favorite sauce. This bowl scores 96 on the health scale and is priced at $6.99 per serving.",
      },
      {
        id: 9,
        image: "https://via.placeholder.com/300",
        title: "Grilled Salmon",
        healthScore: 94,
        pricePerServing: 8.99,
        summary: "Fresh salmon fillet grilled to perfection and served with a side of your choice. This dish scores 94 on the health scale and is priced at $8.99 per serving.",
      },
      {
        id: 10,
        image: "https://via.placeholder.com/300",
        title: "Vegan Lentil Curry",
        healthScore: 97,
        pricePerServing: 5.99,
        summary: "A flavorful and nutritious vegan lentil curry made with red lentils, aromatic spices, and a blend of vegetables. This curry scores 97 on the health scale and is priced at $5.99 per serving.",
      },
      {
        id: 11,
        image: "https://via.placeholder.com/300",
        title: "Roasted Sweet Potato Soup",
        healthScore: 93,
        pricePerServing: 4.99,
        summary: "A comforting and nutritious soup made with roasted sweet potatoes, onions, and a hint of spices. This soup scores 93 on the health scale and is priced at $4.99 per serving.",
      },
      {
        id: 12,
        image: "https://via.placeholder.com/300",
        title: "Chickpea and Avocado Salad",
        healthScore: 91,
        pricePerServing: 5.99,
        summary: "A refreshing salad featuring chickpeas, avocado, mixed greens, and a tangy dressing. This salad scores 91 on the health scale and is priced at $5.99 per serving.",
      },
      {
        id: 13,
        image: "https://via.placeholder.com/300",
        title: "Baked Chicken Breast",
        healthScore: 89,
        pricePerServing: 6.99,
        summary: "Tender and juicy baked chicken breast, seasoned to perfection and served with a side of your choice. This dish scores 89 on the health scale and is priced at $6.99 per serving.",
      },
      {
        id: 14,
        image: "https://via.placeholder.com/300",
        title: "Vegan Quinoa Bowl",
        healthScore: 99,
        pricePerServing: 6.99,
        summary: "A nutritious vegan quinoa bowl filled with roasted vegetables, lean proteins, and a drizzle of your favorite sauce. This bowl scores 99 on the health scale and is priced at $6.99 per serving.",
      },
      {
        id: 15,
        image: "https://via.placeholder.com/300",
        title: "Spinach and Mushroom Risotto",
        healthScore: 88,
        pricePerServing: 7.99,
        summary: "A creamy risotto made with spinach, mushrooms, and a blend of cheeses. This dish scores 88 on the health scale and is priced at $7.99 per serving.",
      },
    ];
    setRecipes(dummyRecipes);
  }, []);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=3c5b0ff27adc4f32b9ef78ad2c709153&limitLicense=true&tags=salad, snack&number=10');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data)
  //       console.log(data.recipes)
  //       setRecipes(data.recipes);
  //     } catch (error) {
  //       console.error('There was a problem with the fetch operation:', error);
  //     }
  //   };

  //   fetchRecipes();
  // }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-8 w-10/12 mx-auto">
      {recipes && recipes.length && recipes.map(recipe => (
        <RecipeThumbnail recipe={recipe} key={recipe.id}/>
      ))}
    </div>
  );
}
