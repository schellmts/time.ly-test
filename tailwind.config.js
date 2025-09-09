/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors: {
        "primary": "#7EBA4A",
        "dark": "#474a4a"
      }
    },
  },
  plugins: [],
}