"use client";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

const CardsRender = ({ recipes,loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      ) : (
        <p className="text-center">
          {loading ? "Loading..." : "No Recipes Found"}
        </p>
      )}
    </div>
  );
};

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
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
  const filteredProds = (value) => {
    const regex = new RegExp(value, "i");
    return recipes.filter(
      (recipe) => regex.test(recipe.title) || regex.test(recipe.description)
    );
  };
  const handleChange = (e) => {
    clearTimeout(searchTimeout);
    setSearch(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        setFiltered(filteredProds(e.target.value));
      }, 500)
    );
  };
  useEffect(() => {
    setFiltered(filteredProds(search));
  }, [search]);
  return (
    <section className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center mb-16">
      <input
        type="search"
        placeholder="Enter Recipe Name"
        value={search}
        onChange={(e) => handleChange(e)}
        className="p-2 rounded-lg w-1/2 border-2 border-gray-300 mt-4 mb-10"
      />
      {search ? (
        <CardsRender recipes={filtered} loading={loading} />
      ) : (
        <CardsRender recipes={recipes} loading={loading} />
      )}
    </section>
  );
};

export default Feed;
