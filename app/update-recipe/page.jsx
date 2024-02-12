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
  const fetchData = async () => {
    try {
      const response = await fetch("/api/recipe/" + searchParams);
      const data = await response.json();
      setRecipe(data);
    }
    catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
      fetchData();
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
          recipe={recipe[0]}
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
