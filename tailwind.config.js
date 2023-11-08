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
        'body-color': "#181818",
        "primary-yellow": "#ff8400",
        "primary-pink": "#ed2445",
        "textCol": "#989898",
        "textCol2": "#e7e7e7",
        "card-bg-color": "#FFFFFF02",
        "card-border-color": "#FFFFFF19",
        "card-shadow-color": "#0000000D"
      },
      backgroundImage: {
        'gradient-71deg': 'linear-gradient(71deg, #080509, #1a171c, #080509)',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

