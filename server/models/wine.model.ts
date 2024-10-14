import { Schema, model } from "mongoose";

interface IWine {
  id: number
  name: string
  region: null|string
  appellation: string
  vintage: string
  winemaker: string
}

const WineSchema = new Schema<IWine>({
  id: Number,
  name: String,
  region: String,
  winemaker: String,
  vintage: String,
  appellation: Number
});

export const Wine = model("Wine", WineSchema);
