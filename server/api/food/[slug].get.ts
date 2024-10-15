import { useRequestEvent } from "nuxt/app";
import { FoodCategory } from "~/server/models/foodCategory.model";
import {Food} from "~/server/models/food.model";

export default defineEventHandler(async (event) => {
  const {i18n, params} = event.context;
  const locale = await i18n?.locale();

  try {
    //@todo localize
    const category = await FoodCategory.findOne({[`localizedSlug.fr`]: params?.slug})
    const recipesWithWineTypes = await Food.aggregate([
      {
        $lookup: {
          from: "foodCategories",
          localField: "categories",
          foreignField: "id",
          as: "foodCategories"
        }
      },
      {
        $match: {
          "foodCategories.slug": category.slug
        }
      },
      {
        $lookup: {
          from: "wineTypes",
          localField: "wineTypes",
          foreignField: "slug",
          as: "wineTypes"
        }
      },
      {
        $lookup: {
          from: "wineAppellations",
          localField: "wineAppellations",
          foreignField: "slug",
          as: "wineAppellations"
        }
      },
      {
        $lookup: {
          from: "wines",
          localField: "wines",
          foreignField: "name",
          as: "wines"
        }
      },
      {
        $project: {
          slug: 1,
          "foodCategories": 1,
          "wineTypes": 1,
          "wines": 1,
          "wineAppellations": 1
        }
      }
    ]);

    return recipesWithWineTypes;
  } catch (error) {
    console.error("Error fetching recipes with wine types:", error);
  }
})
