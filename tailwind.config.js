/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // usa la clase .dark en <html> o <body>
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom colors from global.css
        "--color1": "#1E2A38", // azul claro
        "--color2": "#283747", // azul muy oscuro
        "--color3": "#e2e8f0", // gris claro
        "--color4": "#B0BEC5", // gris medio
        "--color5": "#2A384C", // azul oscuro
        "--color6": "#78909C", // azul claro 
        "--neutral1": "#fff", // blanco
        "--neutral2": "#000", // negro 
      },
    },
  },
  plugins: [],
  safelist: [
    // Add specific classes you want to ensure are generated
    "gap-2",
    "inline-flex",
    "items-center",
    "px-4",
    "py-2",
    "rounded-lg",
    "shadow",
    "transition-colors",
  ],
};
