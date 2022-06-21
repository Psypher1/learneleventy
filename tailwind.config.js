/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,js}", "./src/**/*.svg"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
