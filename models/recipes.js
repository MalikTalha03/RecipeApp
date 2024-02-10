import {Schema, model, models} from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    ingredients: {
        type: [String],
        required: [true, "Ingredients are required"],
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Recipe = models.Recipe || model("Recipe", recipeSchema);
export default Recipe;