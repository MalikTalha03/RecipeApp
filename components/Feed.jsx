"use client";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    try {
      const res = await fetch("/api/recipe");
      const data = await res.json();
      console.log(data);
      setRecipes(res);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <section className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Feed</h2>
      {recipes &&
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
    </section>
  );
};

export default Feed;
