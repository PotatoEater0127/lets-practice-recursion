var deepCopy = function (node) {
  node.

  var traverse = function(parentNode, childNode) {
    parentNode.addChild(childNode.value);
    for (var i = 0; i < childNode.children.length; i++) {
      traverse(childNode, childNode.children[i]);
    }
  }

  traverse(node);
  return node;
}