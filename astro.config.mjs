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
import react from '@astrojs/react';

export default defineConfig({
  // Configura tu URL de producción (importante para rutas absolutas)
  site: 'https://mlopezmartin.com',
  
  // Si tu sitio está en un subdirectorio, configura base: '/subdirectorio/'
  // Si está en la raíz del dominio, déjalo así:
  base: '/',
  
  // Forzar barra final en las URLs
  trailingSlash: 'always',
  
  integrations: [
    react()
  ],
  
  // Asegura que los assets se sirvan correctamente
  build: {
    assets: 'assets'
  }
});