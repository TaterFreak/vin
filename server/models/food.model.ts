import { Schema, model } from "mongoose";

interface IFood {
  id: number
  name: string
  categories: string[]
  pairings: string[]
}

const FoodSchema = new Schema<IFood>({
  id: Number,
  name: String,
  categories: Array,
  pairings: Array
});

export const Food = model("Food", FoodSchema);
