const { connectToDB } = require("@utils/database");
import Recipe from "@models/recipes";

export const POST = async (req, res) => {
  const { title, description, ingredients, userID } = await req.json();
  try {
    await connectToDB();
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      creator: userID,
    });
    await recipe.save();
    return new Response(200, { message: "Recipe created successfully" });
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};
