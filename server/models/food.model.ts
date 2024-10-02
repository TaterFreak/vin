import { Schema, model } from "mongoose";

interface ILocalizedString {
  fr: string
  en: string
}

interface IFood {
  id: number
  name: string
  localizedNames: ILocalizedString[]
  pairing: string[]
}

const FoodSchema = new Schema<IFood>({
  id: Number,
  name: String,
  localizedNames: Array,
  pairing: Array
});

export const Food = model("Food", FoodSchema);
