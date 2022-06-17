/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
