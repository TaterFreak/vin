import { Schema, model } from "mongoose";

interface IWine {
  id: number
  name: string
  appellation: string
}

const WineSchema = new Schema<IWine>({
  id: Number,
  name: String,
  appellation: String
});

export const Wine = model("Wine", WineSchema);
