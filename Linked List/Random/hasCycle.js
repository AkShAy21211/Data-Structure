const { NodeList, Node } = require("./index");



function hasCycle(head){

    let slow  = head;
    let fast  = head;

    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;

        if(slow===fast) return true;
    }

    return false
}


//usage

let list = new NodeList();

list.append(1);
list.append(2);
list.append(3);

list.head.next = list.head; //creating a cycle

console.log(hasCycle(list.head)); //true

