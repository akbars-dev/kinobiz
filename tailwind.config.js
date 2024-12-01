/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dark: {
        color: "#343131",
        background: "#343131"
      },

      backgroundColor: {
        main: "#E4003A"
      },

      colors: {
        yellow: "#ffc30d"
      },

      screens: {
        first: "1200px",
        second: "800px",
        middle: "500px"
      },

      fontFamily: {
        roboto: "Roboto",
        bebas: "Bebas Neue",
        poppins: "Poppins"
      }
    },
  },
  plugins: [],
}

