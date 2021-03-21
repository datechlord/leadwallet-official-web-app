const { fontSize } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontSize: {
      ...fontSize,
      xxs: "7px",
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        primary: "#D01961",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
