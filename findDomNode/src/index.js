const rootA = document.getElementById("rootA");
const rootB = document.getElementById("rootB");
const nodeA = document.getElementById("nodeA");
const nodeB = document.getElementById("nodeB");

function findNodeB(rootA, rootB, nodeA) {
  if (rootA == null || rootB == null) return null;
  if (rootB === nodeB) {
    return rootB;
  }
  var children = rootA.children;
  for (let i in children) {
    var val = findNodeB(rootA.children[i], rootB.children[i], nodeA);
    if (val) return val;
  }
  return null;
}

console.log(findNodeB(rootA, rootB, nodeA) === nodeB);
