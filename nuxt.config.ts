import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['bootstrap-vue-3/nuxt','@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.css', '~/client/assets/css/main.scss'],
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
      }
    ],
  }
})