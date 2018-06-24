var values = function(node) {
  results = [];
  var traverse = function(node) {
    results.push(node.value);
    for (var i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };
  traverse(node);
  return results;
};