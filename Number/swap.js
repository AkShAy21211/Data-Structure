1

//swap two variables without using third veriable
function swapNmeber(a,b){
0
    console.log("Before swapping: ",a,b);

    a = a+b;
    b = a-b;
    a = a-b;

    console.log("After swapping: ",a,b);
}

//another methood swap not like above

function swapNumbers2(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("After swapping: ", a, b);
}

let num1 = 5;

let num2 = 10;

swapNumbers2(num1,num2);