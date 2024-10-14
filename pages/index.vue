<script setup>
import {useFoodStore} from "~/store/foodStore";

const { locale, setLocale } = useI18n();
const foodStore = useFoodStore();

await callOnce(foodStore.fetchAllFoodWithDetails);
</script>

<template>
  <Vheader/>
  <UContainer>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>

      <div class="grid grid-cols-4 gap-4">
        <UCard v-for="(food, index) in foodStore.foods"
        :key="index">
          <template #header>
            <div>Food name: {{food.slug}}</div>
          </template>

          <div>Food categories:
            <ul>
              <li v-for="(category, i) in food.foodCategories"
              :key="i">
                {{category.slug}}
              </li>
            </ul>
          </div>
          <div>Wine types:
            <ul>
              <li v-for="(type, i) in food.wineTypes"
              :key="i">
                {{type.slug}}
              </li>
            </ul>
          </div>
          <div>Wine appellations:
            <ul>
              <li v-for="(appellation, i) in food.wineAppellations"
              :key="i">
                {{appellation.name}}
              </li>
            </ul>
          </div>
          <div>Wine name:
            <ul>
              <li v-for="(wine, i) in food.wines"
                :key="i">
                {{wine.name}}
              </li>
            </ul>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
