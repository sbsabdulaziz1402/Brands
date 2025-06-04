// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: false,
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
    'nuxt-icons',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ]
  ]
})
