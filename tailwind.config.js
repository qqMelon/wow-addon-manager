/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#2B2E43',
        'primary-light-bg': '#2E3246',
        'primary-accent': '#F15025',
        'primary-accent-hover': '#a82c0b',
        'white-platinium': '#E6E8E6',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
