// Problem: Implement an undirected graph and perform DFS traversal.

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  dfs(startVertex, visited = new Set()) {
    visited.add(startVertex);
    console.log(startVertex);

    for (const neighbor of this.vertices.get(startVertex)) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }
}

// Usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.dfs(1); // Output: 1, 2, 3