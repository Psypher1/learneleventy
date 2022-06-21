const { DateTime } = require("luxon");
const pageHeading = require("./src/_includes/shortcodes/pageHeading");

module.exports = function(eleventyConfig) {
  //* PASSTHROUGH COPIES
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });

  // eleventyConfig.addShortcode(
  //   "headers",
  //   (title, subtitle) =>
  //     `<h1>${title}</h1>
  //       <p>${subtitle}</p>`
  // );

  eleventyConfig.addShortcode("pageHeading", pageHeading);

  //* Collection to sort pages
  eleventyConfig.addCollection("page", function(collections) {
    return collections.getFilteredByTag("page").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("dateStuff", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("uk")
      .toLocaleString(DateTime.MEDIUM);
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
