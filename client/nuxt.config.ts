// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: false
  },
  
  css: ["assets/css/app.css"],

  devServer: {
    host: 'localhost'
  },

  modules: ['nuxt-auth-sanctum'],

  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
    redirect: {
      onLogin: '/dashboard',
      onAuthOnly: '/auth/login',
      onGuestOnly: '/dashboard'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }

})