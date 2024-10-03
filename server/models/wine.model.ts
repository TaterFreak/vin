import { Schema, model } from "mongoose";

interface IWine {
  id: number
  name: string;
}

const WineSchema = new Schema<IWine>({
  id: Number,
  name: String,
});

export const Wine = model("Wine", WineSchema);
