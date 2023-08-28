// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@formkit/nuxt',
    '@nuxt/devtools',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400, 500, 600, 700, 800, 900],
      }
    }]
  ],
  plugins: [{ src: '~/plugins/vue-kinesis.js', mode: 'client' }],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
  build: {
  },
  app: {
    head: {
      title: 'Keysoft',
      meta: [
        { name: 'description', content: 'Keysoft landing page' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  devtools: { enabled: false }
})
