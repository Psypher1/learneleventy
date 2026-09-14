export default {
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  overrides: [
    {
      files: "*.njk",
      options: { parser: "html" },
    },
  ],
};
