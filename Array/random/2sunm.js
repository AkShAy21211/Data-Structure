function twoSum(nums, targer) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = targer - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

//test
console.log(twoSum([2, 7, 11, 15], 9));

// complexity

// time complexity: O(n)
// space complexity: O(n)