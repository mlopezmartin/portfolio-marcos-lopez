// .storybook/preview.js
import React from 'react';
import '../src/styles/global.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => React.createElement(
      'div',
      { className: 'dark', style: { padding: '1rem', background: 'var(--color1)' } },
      React.createElement(Story)
    ),
  ],
};

export default preview;
