import { Schema, model } from "mongoose";

interface IFoodCategory {
  id: number
  slug: string
  localizedSlug: any
}

const FoodCategorySchema = new Schema<IFoodCategory>({
  id: Number,
  slug: String,
  localizedSlug: {
    fr: String,
    en: String
  },
});

export const FoodCategory = model("FoodCategory", FoodCategorySchema, 'foodCategories');
