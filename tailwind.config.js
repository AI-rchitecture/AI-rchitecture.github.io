/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      colors: require('tailwindcss/colors'),
    },
  },
  plugins: [],
}