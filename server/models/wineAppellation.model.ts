import { Schema, model } from "mongoose";

interface IWineAppellation {
  id: number
  name: string
  slug: string
  region: number
}

const WineAppellationSchema = new Schema<IWineAppellation>({
  id: Number,
  name: String,
  slug: String,
  region: Number
});

export const WineAppellation = model("WineAppellation", WineAppellationSchema);
