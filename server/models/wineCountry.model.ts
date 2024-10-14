import { Schema, model } from "mongoose";

interface IWineCountry {
  id: number
  name: string
  slug: string
}

const WineCountrySchema = new Schema<IWineCountry>({
  id: Number,
  name: String,
  slug: String
});

export const WineCountry = model("WineCountry", WineCountrySchema);
