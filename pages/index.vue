<script setup>
import {useWebsiteStore} from "~/store/websiteStore";

const { locale, setLocale } = useI18n();
const website = useWebsiteStore();

await callOnce(website.fetch);
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t('welcome') }}</p>

      <div v-for="food in website.foods">
        <span>{{food.slug}}</span>
      </div>
    </div>
  </div>
</template>
