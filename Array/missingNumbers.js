// find missing elements in an array form 1 to 10

function findMissingNumbers(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!map[i]) return i;
  }
}

function findMissingNumbers2(arr){

    let n = arr.length+1;
    let sum = (n * (n + 1)) / 2;
    let totalSum = arr.reduce((sum,curr)=>sum+curr,0);

    return sum - totalSum;
}



console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10])); // Output: 6

console.log(findMissingNumbers2([1, 2, 3, 4, 5, 7, 8, 9, 10])); // Output: 6