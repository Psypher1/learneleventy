import { DateTime } from "luxon";
import tailwindcss from "@tailwindcss/vite";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import markdownIt from "markdown-it";

// import tailwindcss from "eleventy-plugin-tailwindcss-4";

import Headers from "./src/_includes/shortcodes/Headers.js";
import PubDate from "./src/_includes/filters/PubDate.js";
import Markdown from "./src/_includes/filters/Markdown.js";

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

  /** eleventy-plugin-tailwindcss-4 */
  // eleventyConfig.addPlugin(tailwindcss, {
  //   input: "assets/css/tailwind.css", // required
  //   output: "assets/css/main.css", // optional
  // });

  eleventyConfig.addShortcode("headers", Headers);
  // eleventyConfig.addShortcode(
  //   "headers",
  //   (title, subtitle, titleClass = "", subtitleClass = "") =>
  //     `<h1 class="${titleClass}">${title}</h1>
  //    <p class="${subtitleClass}">${subtitle}</p>`,
  // );

  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addFilter("markdown", Markdown);
  eleventyConfig.addFilter("pubDate", PubDate);
  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //   return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  // });

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
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
