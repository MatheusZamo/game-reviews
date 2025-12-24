/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.jsx", "./components/**/*.jsx", "./content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
