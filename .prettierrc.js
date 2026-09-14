export default {
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  plugins: ["prettier-plugin-jinja-template"],
  overrides: [
    {
      files: "*.njk",
      options: { parser: "jinja-template" },
    },
  ],
};
