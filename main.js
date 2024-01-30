// let name = 'john';
// let age = 30;

// let person = {

//     name: "Brad",
//     age: 20
// };

// let newName = name;

// newName = 'jonathan'

// let newPerson = person;

// newPerson.name = 'bradly';


// function outer(){

//     const arr = [];


//     return function inner(num){

//         arr.push(num);
//     }
// }

// const res = outer();

// for(let i=0 ; i<10000; i++){

//     res(i);
//     console.log(res(i));
//     console.log(res());
// }

// console.log(newName);
// console.log(name);
// console.log(newPerson);
// console.log(person);


// function isEven(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// const startTime = performance.now();

// for (let i = 0; i < 50; i++) {
//     console.log(isEven(i));
// }

// const endTime = performance.now();
// const elapsedTime = endTime - startTime;

// console.log(`Total time taken: ${elapsedTime} milliseconds`);


// //TIme complexit examples

// //1. constant
// function constantTimeExample(arr) {
//     return arr[0];
// }

// //2. leniar 
// function linearTimeExample(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// //3. quadratic 

// function quadraticTimeExample(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[i] + arr[j]);
//         }
//     }
// }

// //4. lograthmic 

// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) low = mid + 1;
//         else high = mid - 1;
//     }

//     return -1;
// }



// // Memoization object to store cached results
// const memo = {};

// function fibonacci(n) {
//     // Base case
//     if (n <= 1) {
//         return n;
//     }

//     // Check if the result is already in the memoization cache
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }

//     // Calculate the Fibonacci number using recursion
//     const result = fibonacci(n - 1) + fibonacci(n - 2);

//     // Store the result in the memoization cache
//     memo[n] = result;

//     return result;
// }

// // Test the memoized Fibonacci function
// console.log(fibonacci(50)); // Output: 5


