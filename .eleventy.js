module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
