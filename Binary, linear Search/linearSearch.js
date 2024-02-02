// Linear Search
let array = [1, 4, 6, 7, 3, 6];
let key = 4;
// find the positon of the key id exist. else return -1;

const findKey = (arr, key) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) result.push(i);

    if (result.length === 0) {
      return -1;
    } else {
      return result;
    }
  }
};
console.log(findKey(array, key));

function findKey2(arr, key) {
  const index = arr.findIndex((num) => num === key);
  return index !== -1 ? index : null;
}

console.log(findKey2(array, key));
