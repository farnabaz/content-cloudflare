import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  nitro: {
    preset: 'cloudflare'
  },
  content: {
    documentDriven: true
  }
})
