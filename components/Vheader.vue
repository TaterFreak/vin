<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <header class="header">
    {{$t('welcome')}}
  </header>
</template>

<style lang="scss">
.header {
  height: 50px;
}
</style>