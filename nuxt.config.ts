// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: [
    '@nuxt/image'
  ],
  css: ['~/assets/scss/app.scss'],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'GreenSpark',
      meta: [
        // Для safari отключаем автодетект номеров телефонов
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          name: 'description', content: 'GreenSpark'
        },
        {
          name: 'keywords', content: 'GreenSpark'
        },
        {
          name: 'theme-color', content: '#f2f2f2'
        }
      ],
      bodyAttrs: {
        class: 'gs-app'
      },
      htmlAttrs: {
        lang: 'ru'
      }
    }
  }
})
