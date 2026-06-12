class Graph{

    constructor(){

        this.adjList = {};
    }

    addVertex(vertex){

        if(!this.adjList[vertex]){

            this.adjList[vertex] = new Set();
        }

    }

    addEdge(v1,v2){

        if(!this.adjList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjList[v2]){
            this.addVertex(v2)
        }

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    dfs(start,visited = new Set()){

        visited.add(start);
        console.log(start);

        let adjList = this.adjList[start];

        for(const adj of adjList){
            if(!visited.has(adj)){

                this.dfs(adj,visited)
            }
        }
    }


    bfs(start){

        let visited = new Set();
        visited.add(start);
        let q = [start];
        while(q.length > 0){

            let vertex = q.shift();
            let adjList = this.adjList[vertex];
            console.log(vertex);
            for(const adj of  adjList){

                if(!visited.has(adj)){

                    visited.add(adj);
                    q.push(adj)
                }
            }
        }
    }

    display(){

        for(const vertex in this.adjList){

            console.log(vertex,"->",[...this.adjList[vertex]]);
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D")

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("D","A")
graph.dfs("A")
console.log(".......");
graph.bfs("A")