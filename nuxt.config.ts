// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    plugins: ['~/server/index.ts']
  },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
})
