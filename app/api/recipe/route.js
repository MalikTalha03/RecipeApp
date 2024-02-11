const { connectToDB } = require("@utils/database");
import Recipe from "@models/recipes";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const recipes = await Recipe.find().populate("creator");
    return new Response(JSON.stringify(recipes), {status: 200});
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};
