import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import { MAIN_THEME, mainTheme } from '@/helpers/themes';
import { defaults } from '@/helpers/defaults';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    // add theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
      },
      // add color variations
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 3,
        darken: 3,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });

  app.vueApp.use(vuetify);
});
