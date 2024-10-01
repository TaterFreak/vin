import { Schema, model } from "mongoose";

const FoodSchema = new Schema({
  name: String,
});

export const Food = model("Food", FoodSchema);
