/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins",
        "bebas": "Bebas Neue"
      },
      backgroundColor: {
        "main": "#ff2c1f",
        "background": "#020307"
      },
      screens: {
        first: '880px'
      }
    },
    
  },
  plugins: [],
}