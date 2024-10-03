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
  categories: Array,
  pairings: Array,
  wineTypeIds: Array,
  wineRegionIds: Array,
  wineAppellationIds: Array,
  wineIds: Array
});

export const Food = model("Food", FoodSchema);
