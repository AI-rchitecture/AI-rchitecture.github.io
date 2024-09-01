/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/frontOffice/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: require('tailwindcss/colors'),
    },
  },
  plugins: [],
}