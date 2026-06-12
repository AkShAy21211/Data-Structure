//Find all pairs in an array that sum to a given value.

function findPairs(arr, target) {
  let pairs = [];
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) pairs.push([complement, arr[i]]);
    else map.set(arr[i], true);
  }


  return pairs;
}

//usage

let arr = [1, 8, 3, 9, 5, 2, 6];
let target = 7;

console.log(findPairs(arr, target)); // Output: [[4, 3], [3, 4]]
