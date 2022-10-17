/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: '#fbffa7',
        lightblue: '#b1c5ff',
        lightgreen: '#b6ffc0',
        orangered: '#ff764d',
        purple: '#d5b3ff',
        blue: '#0000ff',
        fullred: '#ef4444'     
      },
      fontFamily: {
        'roboto': ['Roboto ', 'sans-serif'],
        'montserrat': ['Montserrat ', 'sans-serif'],
      },
      gridTemplateColumns: {
        'footer-sm': '0.7fr 1fr 1.4fr',
        'footer': '1fr 1fr'
      }
    },
    screens: {
      'lg': '1263px',
      'sm': {'min': '830px', 'max': '1263px'}
    }
  },
  plugins: [],
}