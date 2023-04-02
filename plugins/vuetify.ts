import { createVuetify, ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#F3D45B',
    secondary: '#FBFAF6',
    darken: '#545458',
    darkest: '#757580',
    lighten: '#aaa',
    error: '#C25155',
    accent: '#CE7B4C',
    accent2: '#4071A1',
    anchor: '#006ada',
    primaryText: '#545458',
    formText: '#fcfbe9',
    discountBlue: '#21559b',
    accentLighten: '#F7F7F7',
    accentLighten2: '#e7e0ba',
    accentLighten3: '#f3f0e4',
    accentLighten4: '#fbfaf5',
    accentLighten5: '#F4F0E4',
    accentDarken: '#985253',
  },
};
import { defaults } from '~~/helpers/defaults';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    // add theme
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
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
