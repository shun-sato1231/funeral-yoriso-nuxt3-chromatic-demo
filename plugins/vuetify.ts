import { createVuetify } from "vuetify";
import {
  MAIN_THEME,
  mainTheme,
  MAIN_DARK_THEME,
  mainDarkTheme,
} from "@/helpers/themes";
import { defaults } from "~~/helpers/defaults";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    // Add the theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      // Add color variations
      variations: {
        colors: ["primary", "secondary"],
        lighten: 3,
        darken: 3,
      },
    },
  });

  app.vueApp.use(vuetify);
});
