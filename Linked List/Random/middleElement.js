const { NodeList, Node } = require("./index");



function hasCycle(head){

    let slow  = head;
    let fast  = head;

    while(fast&& fast.next){

        slow = slow.next;
        fast = fast.next.next;

    }
    return slow.data
}


//usage

let list = new NodeList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(hasCycle(list.head)); //true

