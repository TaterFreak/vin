import {Food} from "~/server/models/food.model";

export default defineEventHandler(async (event) => {
  try {
    const recipesWithWineTypes = await Food.aggregate([
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
          from: "foodCategories",
          localField: "categories",
          foreignField: "slug",
          as: "foodCategories"
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
