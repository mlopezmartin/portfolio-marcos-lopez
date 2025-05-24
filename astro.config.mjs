/* // @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
}); */

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Importante para Storybook
    })
  ],
  vite: {
    css: {
      devSourcemap: true
    }
  }
});