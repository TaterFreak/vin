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

      <div class="grid grid-cols-3 gap-4">
        <UCard v-for="(food, index) in foodStore.foods"
        :key="index">
          <template #header>
            <div class="font-bold uppercase">{{food.slug}}</div>
          </template>

          <div>
            <span class="font-bold">Food categories:</span>
            <ul class="list-inside">
              <li v-for="(category, i) in food.foodCategories"
              :key="i" class="capitalize">
                {{category.slug}}
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Wine types:</span>
            <ul class="list-inside">
              <li v-for="(type, i) in food.wineTypes"
              :key="i" class="capitalize">
                {{type.slug}}
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Wine appellations:</span>
            <ul class="list-inside list-disc">
              <li v-for="(appellation, i) in food.wineAppellations"
              :key="i">
                {{appellation.name}}
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Wine suggestions:</span>
            <ul class="list-inside list-disc">
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
