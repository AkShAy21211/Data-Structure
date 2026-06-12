function findEvenOrOdd(arr) {
  let even = [];
  let odd = [];

  for (const x of arr) {
    if (x % 2 === 0) even.push(x);
    else odd.push(x);
  }

  return { even, odd };
}

// Example usage:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = findEvenOrOdd(numbers);

console.log(result);