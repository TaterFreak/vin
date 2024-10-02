import {Food} from "~/server/models/food.model";

export default defineEventHandler(async (event) => {
  return Food.find();
})
