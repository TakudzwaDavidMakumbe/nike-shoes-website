/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Added jsx to the content option
  theme: {
    extend: {
      colors: {
        primary: "#c11912",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        antonio: ["Anton SC", "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      }, 
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}