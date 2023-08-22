// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-icon',
      '@nuxtjs/i18n',
      '@formkit/nuxt'
  ],
  css: [
    'maz-ui/css/main.css',
    '~/assets/css/tailwind.css',
  ],
  build: {
    transpile: ['maz-ui'],
  },
  app: {
    head: {
      title: 'Keysoft',
      meta: [
        { name: 'description', content: 'Keysoft landing page'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  devtools: { enabled: false },
})
