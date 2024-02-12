"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const RecipeCard = ({ recipe, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(recipe.creator.image)
  return (
    <div className="max-w-2/4 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {recipe?.creator.image && (
          <Image
          width={37}
          height={37}
            src={recipe.creator.image}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          {recipe?.creator.username && (
            <p className="text-lg font-bold">{recipe.creator.username}</p>
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
            <li key={i} className="mb-2">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      {session?.user.id === recipe.creator._id && pathname === "/profile" && (
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
