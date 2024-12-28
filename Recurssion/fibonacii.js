/*
Q2 >>
    find nth fibonacii using recurssion.
*/
let fibonacci = (n,memo={}) => {
    if (n < 2) {
        return n; // base condition
    }
    // Check if the result is already in the memoization cache
    if (memo[n])  return memo[n];
    
    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo[n] = result;
    console.log(memo);
    
    return result;
}
console.log(fibonacci(8));
