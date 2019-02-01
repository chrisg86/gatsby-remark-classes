// Format:
// data: { hProperties: { className: [] } }
module.exports.applyClassesToNode = () => {
    node.data = node.data || {};
    node.data.hProperties = node.data.hProperties || {};
    node.data.hProperties.className = node.data.hProperties.className || [];

    node.data.hProperties.className.push(classes);

    return node;
}