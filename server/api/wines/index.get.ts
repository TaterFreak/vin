import {Wine} from "~/server/models/wine.model";

export default defineEventHandler(async (event) => {
  return Wine.find();
})
