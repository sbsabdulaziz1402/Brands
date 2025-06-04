// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2025-06-04',
  devtools: {enabled: false},
  css: ['~/assets/styles/main.css'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  ssr: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    preset: 'vercel'
  },
  app: {
    baseURL: '/',
  },
  routeRules: {
    // Страницы рендерятся заранее
    '/**': { static: true }
  },
  modules: [
    '@pinia/nuxt', 
    'nuxt-icons'
  ]
})
