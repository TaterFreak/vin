import { Schema, model } from "mongoose";

interface ILocalizedString {
  fr: string
  en: string
}

interface IFood {
  id: number
  name: string
  localizedNames: ILocalizedString[]
  pairings: string[]
}

const FoodSchema = new Schema<IFood>({
  id: Number,
  name: String,
  localizedNames: Array,
  pairings: Array
});

export const Food = model("Food", FoodSchema);
