import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';

import { MAIN_THEME, mainTheme } from '@/helpers/themes';
import { defaults } from '@/helpers/defaults';

// vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetify = createVuetify({
  components,
  directives,
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
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});
