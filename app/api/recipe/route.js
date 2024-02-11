const { connectToDB } = require("@utils/database");
import Recipe from "@models/recipes";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const recipes = await Recipe.find().populate("creator", "name");
    return new Response(200, recipes);
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};
