// 

// arr.forEach((ele,index,arr) => {


//     console.log(ele);
//     console.log(index);
//     console.log(arr);
    
// });


// let sum = 0;


// arr.forEach(element => {

//     sum += element;
//     console.log(sum);
    
// });

const letters = ['a', 'b', 'c', 'a', 'd', 'c', 'e', 'f', 'e'];

let count = {};

const time = performance.now();
letters.forEach(ele => {
    count[ele] = (count[ele] ?? 0) + 1;
});

const result = performance.now() - time;

console.log(count);
console.log('TIME: ', result);
