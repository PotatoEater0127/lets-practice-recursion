var filter = function(node, callBack) {
  var results = [];
  var traverse = function(node) {
    if (callBack(node.value)) {
      results.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      var childNode = node.children[i];
      traverse(childNode, callBack);
    }
  };
  traverse(node);
  return results;
}
