import { Schema, model } from "mongoose";

interface IWineAppellation {
  id: number
  slug: string,
  region: number
}

const WineAppellationSchema = new Schema<IWineAppellation>({
  id: Number,
  name: String,
  region: Number
});

export const WineAppellation = model("WineAppellation", WineAppellationSchema);
