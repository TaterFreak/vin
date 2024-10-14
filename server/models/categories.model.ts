import { Schema, model } from "mongoose";

interface IFoodCategory {
  id: number
  slug: string
}

const FoodCategorySchema = new Schema<IFoodCategory>({
  id: Number,
  slug: String
});

export const FoodCategory = model("FoodCategory", FoodCategorySchema);
