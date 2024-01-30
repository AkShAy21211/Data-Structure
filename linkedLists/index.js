//Node class and linkedlist class

class Node {
    
   constructor(data){
    this.data = data;
    this.next = null;
}
}

//linked list class
class LinkledList{

    constructor(){

        this.head = null;
        this.size= 0;
    }

    isEmpty(){

        return this.size === 0;
    }

    getSize(){
        return this.size
    }


    addNewNodeStart(value){

        const node  = new Node(value);

        //when the list is empty then make the new node as head of the list and increment the size of lists
        if(this.isEmpty()){
            this.head = node;

        }else{
        //if list is not empty add new node pointing to head and make new node as head of the list
        // If the list is not empty, add the new node at the beginning

            node.next = this.head;
            this.head = node;
        }
        this.size++;



    }

    addNewNodeEnd(value){

        const node  = new Node(value);

        if(this.isEmpty()){
            
            this.head = node;
        }else{

             let previous = this.head;
             while(previous.next){
                previous = previous.next;
             }
             previous.next = node;

        }

        this.size++;

    }

    printList(){
        if(this.isEmpty()){

            console.log('list is empty');
        }else{

            let current = this.head;
            let value = ``;
            while(current){

                value += `${current.data} `;
                current = current.next;
            }

            console.log(value);

        }
    }
    
}

const list  = new LinkledList();
console.log("is list empty :",list.isEmpty());
console.log("size of list :",list.getSize());
list.printList()

list.addNewNodeEnd(10);

list.printList()

list.addNewNodeEnd(20);

list.addNewNodeEnd(30);

list.printList()


//TIME COMPELEXITY OF adding new node 

// 1. START OF NODE DOES NOT DEPEND UPON HOW MANY OTHER ELEMENTS ARE THERER IN THE LIST SO IT IS CONSTANT TIME COMPLEXITY
//    ie: O(1)

// 2. REQUIRE TREAVSING TO THE LST NODDE FROM BEGNING SO IT DEPEND ON ELEMENT SO ITS LENIAR;

//     ie: O(n)