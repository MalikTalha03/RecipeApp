"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RecipeCard = ({ index, recipe }) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          {session?.user?.name && (
            <p className="text-lg font-bold">{session.user.name}</p>
          )}
          <p className="text-gray-500 text-sm">Recipe Author</p>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
      <p className="text-base mb-6">{recipe.description}</p>
      <div className="text-left">
        <p className="font-bold mb-2 text-lg">Ingredients:</p>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i} className="mb-2">{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
