"use client";
import { useState } from "react";

const Form = ({ type, recipe, setRecipe, submitting, handleSubmit }) => {
  const [ingredientList, setIngredientList] = useState(
    recipe.ingredients || [""]
  );
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredientList];
    updatedIngredients[index] = value;
    setIngredientList(updatedIngredients);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleAddRemoveIngredient = (index) => {
    if (index === ingredientList.length - 1) {
      setIngredientList([...ingredientList, ""]);
    } else {
      const updatedIngredients = [...ingredientList];
      updatedIngredients.splice(index, 1);
      setIngredientList(updatedIngredients);
      setRecipe({ ...recipe, ingredients: updatedIngredients });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-center text-5xl sm:text-6xl mt-6">
        {type} Recipe
      </h1>
      <p className="mt-4 text-center text-lg sm:text-xl">
        {type} and share your favorite recipes with the world.
      </p>
      <form
        className="flex flex-col justify-center gap-4 mt-4 w-full max-w-2x1 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-bold text-base">Title</span>
        </label>
        <input
          type="text"
          id="title"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          className="p-2 rounded-lg w-full border-2 border-gray-300"
          placeholder="Enter Recipe Name"
        />
        <label>
          <span className="font-bold text-base">Description</span>
        </label>
        <textarea
          id="description"
          value={recipe.description}
          onChange={(e) =>
            setRecipe({ ...recipe, description: e.target.value })
          }
          className="p-2 rounded-lg w-full border-2 border-gray-300"
          placeholder="Enter Recipe Description"
        ></textarea>
        <label>
          <span className="font-bold text-base">Ingredients</span>
        </label>
        {ingredientList.map((ingredient, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="p-2 rounded-lg w-full border-2 border-gray-300"
              placeholder={`Enter Ingredient ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleAddRemoveIngredient(index)}
              className={`px-2 py-1 rounded-full font-bold ${
                index === ingredientList.length - 1
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {index === ingredientList.length - 1 ? "+" : "-"}
            </button>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold w-1/2 mx-auto mt-4 mb-8"
        >
          {submitting ? "Submitting..." : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
