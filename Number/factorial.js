function findFactorial(n) {
  let outupt = 1;


  for (let i = 2; i <= n; i++) {
    outupt *= i;
  }

  return outupt;
}

function recursiveFindFactorial(n) {

    if(n<=1) return 1;
    
    return n * recursiveFindFactorial(n-1);
}

console.log(recursiveFindFactorial(5)); // Output: 120
