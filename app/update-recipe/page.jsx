"use client";
import Form from "@components/Form";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    ingredients: [""],
  });
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams().get("id");
  useEffect(() => {
    if (searchParams) {
      fetch("/api/recipe/" + searchParams)
        .then((res) => res.json())
        .then((data) => {
            setRecipe(data);
        })
        .catch((error) => alert(error));
    }
  }, [searchParams]);
  const handleUpdate = (e) => {
    e.preventDefault();
    setSubmitting(true);
    fetch("/api/recipe/" + searchParams, {
      method: "PUT",
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitting(false);
        router.push("/profile");
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      {recipe && recipe.title !== "" && (
        <Form
          type="Update"
          recipe={recipe}
          setRecipe={setRecipe}
          submitting={submitting}
          handleSubmit={handleUpdate}
        />
      )
      }
    </div>
  );
};

export default Create;
