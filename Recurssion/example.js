//Without Recursive
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;

  for (let i = n; i > 0; i--) result = result * i;

  return result;
}
console.log(factorial(0)); // Outputs: 120

//With Recursive

const factorialRecursive = (n) => {
  return n == 0 ? 1 : n * factorialRecursive(n - 1);
};

function reverse([head, ...tail]) {
  return tail.length ? [...reverse(tail), head] : [head];
}

// console.log(reverse([1,2,3])); // Outputs: [5,4,3,2,1]function reverse([head, ...tail]: [any, ...any[]]): anyconsole.log(factorialRecursive(0)); // Outputs: 120
