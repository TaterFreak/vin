import {Food} from "~/server/models/food.model";

export default defineEventHandler(async (event) => {
  try {
    const recipesWithWineTypes = await Food.aggregate([
      {
        $lookup: {
          from: "wineTypes",
          localField: "wineTypeIds",
          foreignField: "id",
          as: "wineTypesData"
        }
      },
      {
        $lookup: {
          from: "wineAppellations",   // Join with wineAppellations collection
          localField: "wineAppellationIds", // Array of wineAppellationIds in foods
          foreignField: "id",         // Match with the id field in wineAppellations
          as: "wineAppellationsData"  // Alias for the resulting wineAppellations
        }
      },
      {
        $lookup: {
          from: "foodCategories",   // Join with wineAppellations collection
          localField: "categories", // Array of wineAppellationIds in foods
          foreignField: "id",         // Match with the id field in wineAppellations
          as: "foodCategoriesData"  // Alias for the resulting wineAppellations
        }
      },
      {
        $lookup: {
          from: "wines",              // Join with wines collection
          localField: "wineIds",      // Array of wineIds in foods
          foreignField: "id",         // Match with the id field in wines
          as: "winesData"             // Alias for the resulting wines
        }
      },
      {
        $project: {
          slug: 1,
          "foodCategoriesData": 1,
          "wineTypesData": 1,
          "winesData": 1,
          "wineAppellationsData": 1
        }
      }
    ]);

    return recipesWithWineTypes;
  } catch (error) {
    console.error("Error fetching recipes with wine types:", error);
  }
})