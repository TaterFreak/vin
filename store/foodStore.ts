export const useFoodStore = defineStore('foodStore', {
  state: () => ({
    foods: []
  }),
  actions: {
    async fetch() {
      this.foods = await $fetch('/api/foods');
    }
  }
})
