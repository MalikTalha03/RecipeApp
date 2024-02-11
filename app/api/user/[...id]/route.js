import { connectToDB } from "@utils/database";
import Recipe from "@models/recipes";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const recipes = await Recipe.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response(500, { message: "Something went wrong" });
  }
};
