import { Schema, model } from "mongoose";

interface IWineType {
  id: number
  slug: string
}

const WineTypeSchema = new Schema<IWineType>({
  id: Number,
  slug: String,
});

export const WineType = model("WineType", WineTypeSchema);
