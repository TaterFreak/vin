import {Food} from "~/server/models/food.model";
import {Wine} from "~/server/models/wine.model";

export default defineEventHandler(async (event) => {
  const cheese = await Food.findOne({ id: 1 });
  const pairings = await Wine.find({ id: { $in: cheese.pairings } });
  return Food.find();
})
