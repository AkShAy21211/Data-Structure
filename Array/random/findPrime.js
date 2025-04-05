function findPrime(arr) {
  let primes = [];
  for (let num of arr) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) break;
        if (i === num - 1) primes.push(num);
      }
    }
  }
  return primes;
}

console.log(findPrime([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // Output: [2, 3, 5, 7, 11, 13]

//another function
function findPrime2(arr) {

  let primes = [];

  for (let num of arr) {
    
    if (num <= 1) continue;

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }

  return primes;
}

console.log(findPrime2([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// Output: [2, 3, 5, 7, 11, 13]
