class Graph{

    constructor(){

        this.adjList = {};
    }

    addVertex(vertex){

        if(!this.adjList[vertex]){

            this,this.adjList[vertex] = new Set();
        }
    }

    addEdge(v1,v2){

        if(!this.adjList[v1]){

            this.addVertex(v1);
        }

        
        if(!this.adjList[v2]){

            this.addVertex(v2);
        }

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    removeEdge(v1,v2){

        this.adjList[v1].delete(v2);
        this.adjList[v2].delete(v1);
    }

    removeVertex(vertex){

        if(!this.adjList[vertex]){
            return;
        }

        for(const adj of this.adjList[vertex]){

            this.removeEdge(adj,this.adjList[vertex])
        }

        delete this.adjList[vertex];
    }

    hasEdge(v1,v2){

        return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
    }

    hasCycle(){

        const visited = new Set();

        const isCyclic = (vertex,parent)=>{

            visited.add(vertex);

            for(const n of this.adjList[vertex]){
                if(!visited.has(n)){
                    if(isCyclic(n,vertex)){
                        return true;
                    }
                }else if(n !== parent){

                    return true;
                }
            }

            return false;
        }

        for(const vertex in this.adjList){

            if(!visited.has(vertex) && isCyclic(vertex,null) ){

                return true;
            } 
        }

        return false;
    }

    bfs(start){

        let visited = new Set();
        visited.add(start);
        let q = [ start];
        while(q.length > 0){

            let vertex = q.shift();
            let adjVertex = this.adjList[vertex];

            console.log(vertex);

            for(const adj of adjVertex){
                if(!visited.has(adj)){
                    visited.add(adj);
                    q.push(adj)
                }
            }
        }
    }

    dfs(vertex, visited = new Set()){

        visited.add(vertex);
        console.log(vertex);

        let adjVerticess = this.adjList[vertex];
        for(const adj of adjVerticess){
            if(!visited.has(adj)){

                this.dfs(adj,visited)
            }
        }
    }

    display(){

        for(const vertex in this.adjList){

            console.log(vertex,"->",[...this.adjList[vertex]]);
        }
    }
}

const graph  = new Graph();


graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","A");

graph.display()

console.log(graph.hasCycle());

console.log(graph.hasEdge("A","E"));


graph.bfs("B")
graph.df("B")

