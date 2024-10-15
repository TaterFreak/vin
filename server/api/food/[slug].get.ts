import { useRequestEvent } from "nuxt/app";
import { FoodCategory } from "~/server/models/foodCategory.model";
import {Food} from "~/server/models/food.model";

export default defineEventHandler(async (event) => {
  try {
    const slug = await FoodCategory.find({'localizedSlug.en': event.context.params?.slug})
    console.log(slug)

    return slug;
  } catch (error) {
    console.error("Error fetching recipes with wine types:", error);
  }
})
