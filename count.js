var count = function(node, callBack) {
  var counter = 0;
  var traverse = function(node) {
    if (callBack(node.value)) {
      counter++;
    }
    for (var i = 0; i < node.children.length; i++) {
      var childNode = node.children[i];
      traverse(childNode, callBack);
    }
  };
  traverse(node);
  return counter;
}
