// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
  experimental: {
    watcher: 'chokidar'
  },
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    plugins: ['~/server/index.ts']
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/ui'],
  i18n: {
    experimental: {
      localeDetector: './localeDetector.ts'
    },
    locales: ['fr', 'en'],
    detectBrowserLanguage: false,
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    strategy: 'prefix_except_default',
    pages: {
      about: {
        fr: '/a-propos',
        en: '/about'
      },
      'wine/[slug]': {
        fr: '/vin/[slug]',
        en: '/wine/[slug]'
      },
      'list/[slug]': {
        fr: '/listes/[slug]',
        en: '/list/[slug]'
      }
    }
  }
})
