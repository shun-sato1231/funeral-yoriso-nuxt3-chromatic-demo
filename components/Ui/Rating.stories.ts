// Rating.stories.ts
// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Rating from './Rating.vue';

const meta: Meta<typeof Rating> = {
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      return { args };
    },
    template: '<Rating v-bind="args" />',
  }),
};
