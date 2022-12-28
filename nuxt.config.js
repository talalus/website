const isServerlessEnvironment = !!process.env.NOW_REGION

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'HOOPOE.MEDIA | Responsive eCommerce web development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'talal suhail, magento certified front end developer, magento frontend developer, magento pwa developer, vuestorefront developer, magento pwa developer, magento theme developer'
      }
    ],
    htmlAttrs: {
      class: 'antialiased text-black'
    },
    bodyAttrs: {
      class: 'min-h-screen'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f60', height: '3px', throttle: 0 },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazysizes.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/gtm',
    '@nuxtjs/tailwindcss'
  ],
  googleAnalytics: {
    id: 'UA-73427805-1'
  },
  gtm: {
    id: 'GTM-N3PWJXL'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
    '@nuxt/http',
    'nuxt-facebook-pixel-module'
  ],

  facebook: {
    track: 'PageView',
    pixelId: process.env.FACEBOOK_PIXEL_ID || '663960964176142',
    disabled: false
  },

  optimizedImages: {
    optimizeImages: true
  },

  serverMiddleware: isServerlessEnvironment ? [] : ['~/api/contact'],

  generate: {
    dir: 'public'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
