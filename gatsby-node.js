const { createFilePath } = require(`gatsby-source-filesystem`);

require('source-map-support').install();
require('ts-node').register();

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const parent = getNode(_.get(node, 'parent'));
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value: _.get(parent, 'sourceInstanceName')
		});
	}
};

exports.createPages = require('./src/lib/createPages').createPages;
