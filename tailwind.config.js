/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.jsx','./components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      }
    },
  },
  plugins: [],
}
