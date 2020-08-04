const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Righteous", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#02040F",
        white: "#fff",
      },
    },
  },
  variants: {},
  plugins: [],
}
