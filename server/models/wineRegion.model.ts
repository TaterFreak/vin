import { Schema, model } from "mongoose";

interface IWineRegion {
  id: number
  slug: string
  string: number
}

const WineRegionSchema = new Schema<IWineRegion>({
  id: Number,
  name: String,
  country: Number
});

export const WineRegion = model("WineRegion", WineRegionSchema);
