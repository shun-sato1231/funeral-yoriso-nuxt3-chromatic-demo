import { vuetify } from '@/helpers/vuetify';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetify);
});
