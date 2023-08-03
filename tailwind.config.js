/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors: {
        'custom-color': '#D19C97',
        'custom-color-gray': '#edf1ff'
        
      }
    }
  },
}