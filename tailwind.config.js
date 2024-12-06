export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dark: {
        color: "#343131",
        background: "#343131"
      },

      backgroundColor: {
        main: "#E4003A",
        yellow: "#ffc30d",
      },

      colors: {
        yellow: "#ffc30d",
        main: "#E4003A"
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