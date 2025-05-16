//import type { StorybookConfig } from '@storybook/react-vite';
//
//const config: StorybookConfig = {
//  "stories": [
//    "../src/**/*.mdx",
//    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//  ],
//  "addons": [
//    "@storybook/addon-essentials",
//    "@storybook/addon-onboarding",
//    "@chromatic-com/storybook",
//    "@storybook/experimental-addon-test"
//  ],
//  "framework": {
//    "name": "@storybook/react-vite",
//    "options": {}
//  }
//};
//export default config;
// .storybook/main.js
// .storybook/main.js
// .storybook/main.js
const { mergeConfig } = require('vite');

module.exports = {
  framework: '@storybook/react-vite',
  core: { builder: '@storybook/builder-vite' },
  stories: ['../src/components/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/src',    // tu alias de src/
        },
      },
      // NO añadimos aquí tailwindcss() como plugin
      // Vite ya leerá tu postcss.config.cjs
    });
  },
};