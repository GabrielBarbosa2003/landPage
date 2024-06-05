/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",

      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })]
}

