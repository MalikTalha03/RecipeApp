"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RecipeCard = ({ index, recipe }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center">{recipe.title}</h2>
      <p className="text-center">{recipe.description}</p>
      <p className="text-center">{recipe.ingredients}</p>
    </div>
  );
};

export default RecipeCard;
