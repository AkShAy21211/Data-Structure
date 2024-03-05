// Find if Path Exists in Graph

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function validPath(edges, n, source, destination) {
    // Create an adjacency list to represent the graph
    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    // Helper function for DFS
    function dfs(current, visited) {
        if (current === destination) {
            return true; // Found a valid path
        }

        visited.add(current);

        if (graph.has(current)) {
            for (const neighbor of graph.get(current)) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, visited)) {
                        return true;
                    }
                }
            }
        }

        return false; // No valid path found
    }

    // Perform DFS starting from the source
    const visited = new Set();
    return dfs(source, visited);
}

// Example usage:
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const n = 6;
const source = 0;
const destination = 5;

console.log(validPath(edges, n, source, destination)); // Output: true
