import { Schema, model } from "mongoose";

interface IWineRegion {
  id: number
  name: string
  slug: string
  country: string
}

const WineRegionSchema = new Schema<IWineRegion>({
  id: Number,
  slug: String,
  name: String,
  country: String
});

export const WineRegion = model("WineRegion", WineRegionSchema);
