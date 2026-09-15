import { DateTime } from "luxon";
import tailwindcss from "@tailwindcss/vite";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

// import tailwindcss from "eleventy-plugin-tailwindcss-4";

export default function (eleventyConfig) {
  // pass through copies
  eleventyConfig.addPassthroughCopy("src/assets/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  // vite
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [tailwindcss()],
    },
  });

  // eleventyConfig.addPlugin(tailwindcss, {
  //   input: "assets/css/tailwind.css", // required
  //   output: "assets/css/main.css", // optional
  // });

  eleventyConfig.addShortcode(
    "headers",
    (title, subtitle, titleClass = "", subtitleClass = "") =>
      `<h1 class="${titleClass}">${title}</h1>
     <p class="${subtitleClass}">${subtitle}</p>`,
  );

  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
