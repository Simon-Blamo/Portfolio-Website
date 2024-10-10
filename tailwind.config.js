/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'wide': {
          'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        }
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}

