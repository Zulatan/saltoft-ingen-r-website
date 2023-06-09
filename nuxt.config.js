export default {
  // sass import below
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
        fiber: require('fibers'),
        sassOptions: {
          indentedSyntax: true // For using Sass indent syntax instead of SCSS
        }
      }
    },
    dir: 'dist' // out directory for when i run npm run build
  },
  server: {
    port: 4500
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Saltoft Ingeniør A/S',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bygningsingeniør, bæredygtig design & teknisk rådgivning.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/si-logo.svg' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/agr5dop.css' } // poppins, futura, new hero font

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_variables.scss',
    '@/assets/scss/_fonts.scss',
    '@/assets/scss/global.scss',
    '@/assets/scss/footer.scss'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  }

  // // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  // }
}
