import { Schema, model } from "mongoose";

interface IWineCountry {
  id: number
  slug: string
}

const WineCountrySchema = new Schema<IWineCountry>({
  id: Number,
  name: String,
});

export const WineCountry = model("WineCountry", WineCountrySchema);
