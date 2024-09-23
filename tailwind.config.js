/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          light: '#f0f0f0',
          dark: '#2a2a2a',
        },
        accent: {
          light: '#4a5568',
          dark: '#a0aec0',
        },
        text: {
          light: '#1a1a1a',
          dark: '#ffffff',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

