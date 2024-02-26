class Graph{

    constructor(){
        this.adjencencyList = {};
    }

    addVertex(vertex){

        if(!this.adjencencyList[vertex]){

            this.adjencencyList[vertex] = new Set();

        }
    }

    addEdge(v1,v2){

        if(!this.adjencencyList[v1]){

            this.addVertex(v1)
        }
        if(!this.adjencencyList[v2]){

            this.addVertex(v2)
        }


        this.adjencencyList[v1].add(v2);
        this.adjencencyList[v2].add(v1);

    }

    display(){

        for(let vertex in this.adjencencyList){
            console.log(vertex + "->"+ [...this.adjencencyList[vertex]]);
        }
    }

    hasEdge(v1,v2){

        return (

            this.adjencencyList[v1].has(v2) && this.adjencencyList[v2].has(v1)
        )
    }


    removeEdge(v1,v2){

        this.adjencencyList[v1].delete(v2);
        this.adjencencyList[v2].delete(v1);

    }

    removeVertix(vertex){
        if(!this.adjencencyList[vertex]) {
            return
        }
        
        for(let adjVertex of  this.adjencencyList[vertex]){

            this.removeEdge(vertex,adjVertex)
        }

        delete this.adjencencyList[vertex]
    }
}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge('A','B');
graph.addEdge('B','C');

graph.display();

console.log(graph.hasEdge("A","A"));

graph.removeVertix("B");

graph.display();
