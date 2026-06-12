// Linear Search
let array = [1, 4, 6, 7, 3, 6];
let key = 3;
// find the positon of the key id exist. else return -1;

const findKey = (arr, key) => {
  let result=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) result = i+1;
  }

  return result === 0? -1 : result;
};
console.log(findKey(array, key));

function findKey2(arr, key) {
  const index = arr.findIndex((num) => num === key);
  return index !== -1 ? index+1 : -1;
}


//complexity
//time complexity: o(n)

//advantages of linear search

// 1. It's simple and easy to implement.
// 2. It's suitable for small data sets.
// 3. It's efficient for searching items that are in a sorted array.

//disadvantages of linear search

// 1. It's not efficient for searching items that are not in the array.
// 2. It requires the array to be sorted for efficient searching.





console.log(findKey2(array, key));
