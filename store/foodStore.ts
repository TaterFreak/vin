export const useFoodStore = defineStore('foodStore', {
  state: () => ({
    foods: []
  }),
  actions: {
    async fetchAllFoodWithDetails() {
      this.foods = await $fetch('/api/food');
    }
  }
})
