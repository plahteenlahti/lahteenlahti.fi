const path = require('path');
const jimp = require('jimp');

module.exports = ({ markdownNode }) => {
	const { frontmatter, fields } = markdownNode;
	const output = path.join('./public', fields.slug, 'seo.jpg');

	return Promise.all([
		jimp.read(path.join(__dirname, 'base.jpg')),
		jimp.loadFont(jimp.FONT_SANS_32_BLACK)
	]).then(([image, font]) => {
		image.print(font, 50, 50, frontmatter.title).write(output);
	});
};
