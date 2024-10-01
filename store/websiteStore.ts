export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    foods: []
  }),
  actions: {
    async fetch() {
      this.foods = await $fetch('/api/foods');
    }
  }
})
