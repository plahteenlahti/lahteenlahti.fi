const path = require('path');
const jimp = require('jimp');

module.exports = ({ markdownNode }) => {
	const { frontmatter, fields } = markdownNode;
	const output = path.join('./public', fields.slug, `${fields.slug}.jpg`);

	return Promise.all([
		jimp.read(path.join(__dirname, 'base.jpg')),
		jimp.loadFont(path.join(__dirname, 'Montserrat.fnt'))
	]).then(([image, font]) => {
		image.print(font, 50, 120, frontmatter.title, 1100).write(output);
	});
};
