import { Schema, model } from "mongoose";

interface ILocalizedString {
  fr: string
  en: string
}

interface IWine {
  id: number
  name: string;
  localizedNames: ILocalizedString[];
}

const WineSchema = new Schema<IWine>({
  id: Number,
  name: String,
  localizedNames: Array,
});

export const Wine = model("Wine", WineSchema);
