const {Stack}  = require("./stack-using-linked-list");

// reverse a string using stack



const reverse = (str,stack) => {
    let string = str.split("");
    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    }

    // reversing loop
    for(let i = 0; i < string.length; i++){
        string[i] = stack.pop();
    }

    return string.join("")
}

let string = "dlrow olleh";
const stack = new  Stack();
console.log(reverse(string,stack));