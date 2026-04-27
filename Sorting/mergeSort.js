function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let sortedArray = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }
  return sortedArray;
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted Array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);