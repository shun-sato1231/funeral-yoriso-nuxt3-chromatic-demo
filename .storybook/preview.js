/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';

// styles
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/scss/style.scss';

// vuetify
import { vuetify } from '../helpers/vuetify';

setup((app) => {
  app.use(vuetify);
});

export const decorators = [
  (story) => ({
    components: { story },
    template: '<v-app><story /></v-app>',
  }),
];
