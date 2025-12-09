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
  site: 'https://tupagina.com', // Reemplaza con tu dominio real
  
  // Si tu sitio está en un subdirectorio, configura base: '/subdirectorio/'
  // Si está en la raíz del dominio, déjalo así:
  base: '/',
  
  integrations: [
    react()
  ],
  
  // Asegura que los assets se sirvan correctamente
  build: {
    assets: 'assets'
  }
});