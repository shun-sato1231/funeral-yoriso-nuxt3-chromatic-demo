import vuetify from 'vite-plugin-vuetify';

// Config
const title = 'Vuetify 3 + Nuxt 3 Starter';
const description =
  'Template to get you up and running with Nuxt 3 & Vuetify 3';
const image = 'https://vuetify3nuxt3starter.behonbaker.com/starter.png';
const url = 'https://vuetify3nuxt3starter.behonbaker.com/';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,
  // css
  css: ['@/assets/scss/style.scss'],

  // build
  build: {
    transpile: ['vuetify'],
  },

  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify());
    },
  },

  // auto import components
  components: true,

  // vite
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_variables.scss" as *;`,
        },
      },
    },
  },

  // imports
  imports: {
    dirs: ['composables/**'],
  },

  app: {
    head: {
      title: 'Vuetify 3 + Nuxt 3 Starter',
      titleTemplate: '%s | Vuetify 3 + Nuxt 3 Starter',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'canonical',
          href: url,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        //Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
    },
  },
});
