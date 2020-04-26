const path = require("path");
const jimp = require("jimp");

module.exports = ({ markdownNode }) => {
  const { frontmatter, fields, fileAbsolutePath } = markdownNode;
  const slug = fileAbsolutePath.includes("weeklies")
    ? `/weekly${fields.slug}`
    : fields.slug;
  const output = path.join("./public", slug, "seo.jpg");

  return Promise.all([
    jimp.read(path.join(__dirname, "base.jpg")),
    jimp.loadFont(path.join(__dirname, "Montserrat.fnt")),
  ]).then(([image, font]) => {
    const title = frontmatter.title.replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ""
    );

    image.print(font, 50, 120, title, 1100).write(output);
  });
};
