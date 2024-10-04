import { Schema, model } from "mongoose";

interface IFood {
  id: number
  name: string
  categories: string[]
  pairings: string[]
  wineTypeIds: string[]
  wineRegionIds: string[]
  wineAppellationIds: string[]
  wineIds: string[]
}

const FoodSchema = new Schema<IFood>({
  id: Number,
  name: String,
  categories: [Number],
  pairings: [Number],
  wineTypeIds: [Number],
  wineRegionIds: [Number],
  wineAppellationIds: [Number],
  wineIds: [Number]
});

export const Food = model("Food", FoodSchema);
