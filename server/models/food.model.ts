import { Schema, model } from "mongoose";

interface IFood {
  id: number
  slug: string
  categories: string[]
  pairings: string[]
  wineTypes: string[]
  wineRegions: string[]
  wineAppellations: string[]
  wines: string[]
}

const FoodSchema = new Schema<IFood>({
  id: Number,
  slug: String,
  categories: [String],
  pairings: [String],
  wineTypes: [String],
  wineRegions: [String],
  wineAppellations: [String],
  wines: [String]
});

export const Food = model("Food", FoodSchema);
