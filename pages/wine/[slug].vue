<script setup>
import { useWineStore } from '~/store/wineStore';

const wineStore = useWineStore();
const route = useRoute();

await wineStore.fetchWineBySlug(route.params.slug);
</script>

<template>
  <Vheader/>
  <UContainer>
    <div>
      {{ wineStore.wine.name }}
    </div>
  </UContainer>
</template>
