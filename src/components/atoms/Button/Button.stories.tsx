// src/components/atoms/Button/Button.stories.tsx
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    rounded: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    obfuscate: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Click Me</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  rounded: 'rounded-lg',
  width: 'w-32',
  height: 'h-10',
  obfuscate: false,
};

export const ObfuscatedLink = Template.bind({});
ObfuscatedLink.args = {
  variant: 'primary',
  href: 'https://example.com',
  obfuscate: true,
  rounded: 'rounded-full',
};
