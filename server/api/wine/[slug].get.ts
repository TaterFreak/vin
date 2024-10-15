import { Wine } from "~/server/models/wine.model";

export default defineEventHandler(async (event) => {
  const {params} = event.context;

  try {
    const wine = await Wine.findOne({slug: params?.slug})

    return wine;
  } catch (error) {
    console.error("Error fetching recipes with wine types:", error);
  }
})
