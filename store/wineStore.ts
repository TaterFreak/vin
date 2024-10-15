interface IWineData {
  id: number
  slug: string
  name: string
}

export const useWineStore = defineStore('wineStore', {
  state: () => ({
    wine: {} as IWineData
  }),
  actions: {
    async fetchWineBySlug(slug: string) {
      this.wine = await $fetch(`/api/wine/${slug}`);
    }
  }
})
