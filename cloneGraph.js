var cloneGraph = function(node) {
    let visited = new Map();
    return cloneHelper(node, visited)
};

var cloneHelper = function(node, visited) {
    if (node === null) return;
    if (node.val in visited) return visited[node.val];
    
    let clone = new Node(node.val, []);
    visited[node.val] = clone;
    
    for (const neighbor of node.neighbors) {
        clone.neighbors.push(cloneHelper(neighbor, visited))
    }

    return clone;
}
