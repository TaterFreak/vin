interface IFoodCategoriesData {
  id: number,
  slug: string
}

interface IWineTypesData {
  id: number,
  slug: string
}

interface IWineAppellationsData {
  id: number,
  name: string
  region: string
}

interface IWinesData {
  id: number,
  name: string
  appellation: string
}

interface IFoodData {
  id: number
  slug: string
  wineTypesData: IWineTypesData[]
  wineAppellationsData: IWineAppellationsData[]
  foodCategoriesData: IFoodCategoriesData
  winesData: IWinesData
}

export const useFoodStore = defineStore('foodStore', {
  state: () => ({
    foods: [] as IFoodData[]
  }),
  actions: {
    async fetchAllFoodWithDetails() {
      this.foods = await $fetch('/api/food');
    },
    async fetchFoodForSlug(slug: string) {
      this.foods = await $fetch(`/api/food/${slug}`, {retry: false});
    }
  }
})
