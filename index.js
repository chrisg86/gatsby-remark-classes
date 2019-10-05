const visit = require('unist-util-visit');
const visitChildren = require('unist-util-visit-children');

const applyClassesToNode = (node, classes) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.data.hProperties.className.push(classes);

  return node;
};

module.exports = ({markdownAST}, {classMap = {}}) => {
  // @see: https://github.com/syntax-tree/mdast#nodes
  visit(markdownAST, `heading`, node => {
    const selector = `h${node.depth}`;

    if (selector in classMap) {
      node = applyClassesToNode(node, classMap[selector]);
    }
  });

  visit(markdownAST, `blockquote`, node => {
    const selector = `blockquote`;

    if (selector in classMap) {
      node = applyClassesToNode(node, classMap[selector]);
    }
  });

  visit(markdownAST, `list`, node => {
    let selector = `ul`;
    if (node.ordered) {
      selector = `ol`;
    }

    let childSelector = `${selector}.li`;

    // Recurse over the list's LIs if we're styling 'em
    if (childSelector in classMap) {
      visitChildren(node => {
        if (node.type === 'listItem') {
          applyClassesToNode(node, classMap[childSelector]);
          return;
        }
      })(node);
    }

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
};
