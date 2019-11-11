import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  head: {
    titleTemplate: 'VENEZIA Иваново | Элитная обувь из Италии ',
    title: process.env.npm_package_name || 'VENEZIA Иваново - элитная мужская и женская обувь, аксессуары из Италии. Натуральная кожа и замша с бесплатной доставкой по России!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://venezia-rus.ru/'
  },

  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
  },

  css: [
    '@/assets/global.scss'
  ],

  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false },
    { src: '~/plugins/global', ssr: true }
  ],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    ['@nuxtjs/yandex-metrika', { id: '55771003', webvisor: true }],
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: 'fa'
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#000000',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          disabled: '#000000'
        }
      }
    }
  },

  build: {
    extend (config, ctx) {},
    vendor: ['external_library']
  }
}
