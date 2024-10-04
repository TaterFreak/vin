<script setup>
import {useFoodStore} from "~/store/foodStore";

const { locale, setLocale } = useI18n();
const foodStore = useFoodStore();

await callOnce(foodStore.fetch);
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <div v-for="food in foodStore.foods">
        <div>Food name: {{food.slug}}</div>
        <div>Food categories:
          <ul>
            <li v-for="category in food.categories">
              {{category}}
            </li>
          </ul>
        </div>
        <div>Wine types:
          <ul>
            <li v-for="type in food.wineTypesData">
              {{type.slug}}
            </li>
          </ul>
        </div>
        <div>Wine appellations:
          <ul>
            <li v-for="appellation in food.wineAppellationsData">
              {{appellation.name}}
            </li>
          </ul>
        </div>
        <div>Wine name:
          <ul>
            <li v-for="wine in food.winesData">
              {{wine.name}}
            </li>
          </ul>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
