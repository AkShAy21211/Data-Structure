let array = [-1, 0, 3, 5, 9, 12];
let key = 9;
// find the index of the key if it exist else return -1;

const findKey = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === key) {
      return mid;
    } else {
      if (arr[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      mid = (start + end) / 2;
    }
  }

  return -1;
};

//complexity
//time: O(log n)
//space: O(log n)


//advanatges of binary searh

// 1. it is faster than linear search
// 2. it can handle duplicate elements
// 3. it can handle negative numbers
// 4. it can handle floating point numbers
// 5. it can handle large datasets



//drabacks of binary searh
// 1. it requires sorted array
// 2. it has a worst-case time complexity of O(log n)
// 3. it may not be suitable for large datasets


console.log(findKey(array, key));
