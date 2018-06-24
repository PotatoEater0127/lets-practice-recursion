var includes = function(node, callBack) {
  var found = false;
  var traverse = function(node) {
    if (callBack(node.value)) {
      found = true;
    } else if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        var childNode = node.children[i];
        traverse(childNode, callBack);
      }
    }
  };
  traverse(node);
  return found;
}
