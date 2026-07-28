export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
}
