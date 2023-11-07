/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
      },
      colors: {
        'nav-pink': '#faf2f7',
      },
    },
  },
  plugins: [],
}

