const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ['./public/**/*.html'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      opacity: ['dark'],
      overflow: ['hover'],
    },
  },
  plugins: [],
}
