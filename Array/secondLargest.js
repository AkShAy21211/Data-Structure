//find second largest element and delete the first largest

// find largest element
// find index of first largest element
// delete index of first largest element using splice methood
// find index of second largest element

function findSecondLargestAndDeleteFirstLargest(arr) {
  let max = Math.max(...arr);
  let maxIndex = arr.indexOf(max);
  arr.splice(maxIndex, 1);

  return Math.max(...arr);
}

// another way

function findSecondLargestAndDeleteFirstLargest2(arr) {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  let secondLargest = Math.max(...arr.filter((ele) => ele != max));

  return secondLargest;
}
const array = [10, 22, 9, 33, 21, 50, 41, 60];

console.log(findSecondLargestAndDeleteFirstLargest2(array)); // Output: 50
