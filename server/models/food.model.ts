import { Schema, model } from "mongoose";

interface ILocalizedString {
  fr: string
  en: string
}

interface IFood {
  name: string;
  localizedNames: ILocalizedString[];
  pairing: string[]
}

const FoodSchema = new Schema<IFood>({
  name: String,
  localizedNames: Array,
  pairing: Array
});

export const Food = model("Food", FoodSchema);
