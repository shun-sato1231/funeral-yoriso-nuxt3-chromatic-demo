import type { Meta, StoryObj } from '@storybook/vue3';

import Rating from './Rating.vue';

const meta: Meta<typeof Rating> = {
  component: Rating,
  // ratingとsizeをstorybook上で変更できるよう設定
  argTypes: {
    rating: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    size: {
      control: 'inline-radio',
      options: ['s', 'm'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const sizeS: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      return { args };
    },
    template: '<Rating v-bind="args" />',
  }),
  // ratingとsizeの初期値設定
  args: {
    rating: 1,
    size: 's',
  },
};

export const sizeM: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      return { args };
    },
    template: '<Rating v-bind="args" />',
  }),
  // ratingとsizeの初期値設定
  args: {
    rating: 3,
    size: 'm',
  },
};
