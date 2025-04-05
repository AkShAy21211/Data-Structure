// METHOOD 1 using hash table
function findDuplicate(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    }

    map.set(arr[i], map.get(arr[i]) + 1);
  }

  return Math.max(...map.values());
}

let nums = [1, 3, 4, 2, 5, 3,5, 6, 7];

console.log(findDuplicate(nums));

// methood 2 using inbuilt functions

function findDuplicate2(arr) {
  return arr.reduce((a, b) => a ^ b, 0);
}

function findDuplicate3(arr) {
  const res = arr.filter((ele, i, arr) => arr.indexOf(ele) !== i);

  return res
}

console.log(findDuplicate3(nums));
