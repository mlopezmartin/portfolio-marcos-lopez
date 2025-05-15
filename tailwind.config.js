/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // usa la clase .dark en <html> o <body>
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [],
};
