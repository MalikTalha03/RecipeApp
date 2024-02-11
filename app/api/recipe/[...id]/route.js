import { connectToDB } from "@utils/database";
import Recipe from "@models/recipes";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const recipes = await Recipe.find({ id: params.id });
    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    const recipe = await Recipe.findByIdAndDelete(params.id);
    return new Response(JSON.stringify(recipe), { status: 200 });
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};

export const PUT = async (req, { params }) => {
  const { title, description, ingredients } = await req.json();
  try {
    await connectToDB();
    const recipe = await Recipe.findByIdAndUpdate(params.id, {
      title,
      description,
      ingredients,
    });
    return new Response(JSON.stringify(recipe), { status: 200 });
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};
