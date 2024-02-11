"use client";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const getRecipes = async () => {
    try {
      const res = await fetch("/api/recipe");
      const data = await res.json();
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <section className="w-full max-w-4xl mx-auto flex  justify-center mt-8 gap-4 mb-16">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      ) : (
        <p className="text-center">{loading ? "Loading..." : "No Recipes Found"}</p>
      )}
    </section>
  );
};

export default Feed;
