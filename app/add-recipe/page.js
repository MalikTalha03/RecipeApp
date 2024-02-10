"use client";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Create = () => {
  const { data: session } = useSession();
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
  });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/recipe/new", {
        method: "POST",
        body: JSON.stringify({
          title: recipe.title,
          description: recipe.description,
          ingredients: recipe.ingredients,
          userID: session?.user.id,
        }),
      });
      setSubmitting(false);
      const data = await res.json();
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <Form
        type="Create"
        recipe={recipe}
        setRecipe={setRecipe}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Create;
