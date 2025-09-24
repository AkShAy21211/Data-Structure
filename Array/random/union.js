function findUnion(arr1, arr2) {
  let union = arr1.filter((ele) => {
    return !arr2.includes(ele);
  });

  union = union.concat(
    arr2.filter((ele) => {
      return !arr1.includes(ele);
    })
  );

  return [...new Set(union)];
}

console.log(findUnion([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [4, 5]

function findUnion(arr1, arr2) {
  let freq = new Map();
  let union = [];
  
  for (let num of arr1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  for (let num of arr2) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  for (let [num, count] of freq) {
    union.push(num);
  }
  
  return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let union = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));






function findUnion(arr1, arr2) {
  const set = new Set();
  const union = [];

  for (let num of arr1) {
    set.add(num);
  }

  for (let num of arr2) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
  }

  return union;
}


const union2 = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(...union);



function findUnion(arr1, arr2) {
  let i = 0, j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) { // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else { // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) { // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i])
      union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) { // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j])
      union.push(arr2[j]);
    j++;
  }

  return union;
}

const union3 = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));

