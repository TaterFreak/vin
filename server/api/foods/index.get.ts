import {Food} from "~/server/models/food.model";
import {Wine} from "~/server/models/wine.model";

export default defineEventHandler(async (event) => {
  try {
    const recipesWithWineTypes = await Food.aggregate([
      {
        $lookup: {
          from: "wineTypes",            // The name of the WineType collection
          localField: "wineTypeIds",    // Field in the Recipe collection
          foreignField: "_id",          // Field in the WineType collection
          as: "wineTypesData"           // Alias for the resulting array of WineTypes
        }
      },
      {
        $unwind: {
          path: "$wineTypesData",       // Unwind the array of matched wine types
          preserveNullAndEmptyArrays: true // Optional, include recipes with no wineType match
        }
      },
      {
        $project: {
          slug: 1,                      // Select specific fields from Recipe
          categories: 1,
          "wineTypesData.name": 1       // Select specific fields from WineType (e.g., name)
        }
      }
    ]);

    console.log(recipesWithWineTypes);
    return recipesWithWineTypes;
  } catch (error) {
    console.error("Error fetching recipes with wine types:", error);
  }
})
