<script setup>
import {useFoodStore} from "~/store/foodStore";

const foodStore = useFoodStore();
const  {locale} = useI18n();

await callOnce(foodStore.fetchAllFoodWithDetails);
</script>

<template>
  <Vheader/>
  <UContainer>
    <div>
      <div class="grid grid-cols-3 gap-4">
        <UCard v-for="(food, index) in foodStore.foods"
        :key="index">
          <template #header>
            <div class="font-bold uppercase">{{food.slug}}</div>
          </template>

          <div>
            <span class="font-bold">Categorie(s) du plat:</span>
            <ul class="list-inside">
              <li v-for="(category, i) in food.foodCategories"
              :key="i" class="capitalize">
              <NuxtLink :to="localePath({ name: 'list-slug', params: { slug: category.localizedSlug[locale] } })">
                {{ category.localizedSlug[locale] }}
              </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Types de vins recommandés:</span>
            <ul class="list-inside">
              <li v-for="(type, i) in food.wineTypes"
              :key="i" class="capitalize">
                {{type.slug}}
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Appellations:</span>
            <ul class="list-inside list-disc">
              <li v-for="(appellation, i) in food.wineAppellations"
              :key="i">
                {{appellation.name}}
              </li>
            </ul>
          </div>
          <div>
            <span class="font-bold">Suggestions de vins:</span>
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
