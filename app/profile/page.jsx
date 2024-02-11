"use client";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const getRecipes = async () => {
    try {
      const res = await fetch("/api/user/" + session?.user.id);
      const data = await res.json();
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, [session?.user.id]);
  const handleDelete = (recipe) => {
    if (!confirm("Are you sure you want to delete this recipe?")) return;
    fetch("/api/recipe/" + recipe._id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newRecipes = recipes.filter((recipe) => recipe._id !== data._id);
        setRecipes(newRecipes);
      })
      .catch((error) => alert(error));
  };
  const handleEdit = (recipe) => {
    router.push("/update-recipe?id=" + recipe._id);
  };
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center mt-8 gap-4">
      {recipes && recipes.length > 0 ? (
        <Profile
          name={session?.user.name}
          desc="Welcome to your profile. Here you can view and manage your recipes."
          data={recipes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="text-center">
          {loading ? "Loading..." : "No Recipes Found"}
        </p>
      )}
    </section>
  );
};

export default Page;
