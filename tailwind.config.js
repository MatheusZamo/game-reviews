/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.jsx','./components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif']
      }
    },
  },
  plugins: [ require('@tailwindcss/typography') ],
}
