import { Schema, model } from "mongoose";

interface IWineRegion {
  id: number
  slug: string
}

const WineRegionSchema = new Schema<IWineRegion>({
  id: Number,
  name: String,
});

export const WineRegion = model("WineRegion", WineRegionSchema);
