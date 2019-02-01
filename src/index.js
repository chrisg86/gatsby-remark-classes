const visit = require('unist-util-visit');

const applyClassesToNode = require('./applyClassesToNode');

module.exports = (
    { markdownAST },
    { classMap = {} }
) => {
    // @see: https://github.com/syntax-tree/mdast#nodes
    visit(markdownAST, `heading`, node => {
        const selector = `h${node.depth}`;

        if (selector in classMap) {
            node = applyClassesToNode(node, classMap[selector]);
        }
    });

    visit(markdownAST, `table`, node => {
        const selector = `table`;

        if (selector in classMap) {
            node = applyClassesToNode(node, classMap[selector]);
        }
    });

    visit(markdownAST, `paragraph`, node => {
        const selector = `paragraph`;

        if (selector in classMap) {
            node = applyClassesToNode(node, classMap[selector]);
        }
    });
}