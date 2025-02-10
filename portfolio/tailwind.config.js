/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all component files
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9BC1BC',
          dark: '#9BC1BC',
        },
        secondary: {
          light: '#F4E8C1',
          dark: '#3A506B',
        },
        accent: {
          light: '#2C6975',
          dark: '#D9E8EC',
        },
        background: {
          light: '#FFFFFF',
          dark: '#2E3B4E',
        },
        text: {
          light: '#607D8B',
          dark: '#D9E8EC',
        },
        tertiary: {
          light: '#FFB6C1',
          dark: '#8B0000',
        },
      },
      backgroundImage: {
        "light-bg": "url('../assets/logo_light.png')",
        "dark-bg": "url('../assets/logo_dark.png')",
      }
    },
  },
  plugins: [],
};