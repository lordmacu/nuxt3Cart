import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  title: 'Vue Cart',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'super cart in nuxt'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  modules: ['bootstrap-vue-3/nuxt', '@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.css', '~/client/assets/css/main.scss'],
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
      }
    ],
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.APP_SERVER_URL
  },
  plugins: ['~/client/plugins/vue-sweetalert.js']

}) 