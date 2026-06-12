/*
Q1>>
return the factorial of a number using recursion.
 */
let factorial = (n) => {
  if (n == 1) {
    return 1; //base condition
  }
  return n * factorial(n - 1);
};
// output
console.log(factorial(5));

function factorialTCO(x, acc = 1) {
  if (x === 1 || x === 0) return acc;

  return factorialTCO(x - 1, x * acc);
}


console.log(factorialTCO(5));