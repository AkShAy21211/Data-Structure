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

// Explanation: The function uses a hash map to store the indices of the numbers in the array. For each number, it calculates the difference between the target and the current number. If the difference exists in the map, it means we have found the two numbers that add up to the target, and we return their indices. If not, we add the current number and its index to the map. This allows us to find the solution in a single pass through the array, resulting in O(n) time complexity. The space complexity is also O(n) because in the worst case, we may need to store all numbers in the map.