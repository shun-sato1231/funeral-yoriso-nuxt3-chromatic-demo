// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    default: {
      control: 'text',
    },
    click: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<Button v-bind="args" @click="onClick" >{{ args.default }}</Button>',
    methods: {
      onClick: action('clicked'),
    },
  }),
  args: {
    disabled: false,
    default: 'text',
  },
};
