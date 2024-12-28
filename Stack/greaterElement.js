
var nextGreaterElement = function(nums) {
    debugger;
    const stack = [];
    const result = Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = nums[i];
        }
        
        stack.push(i);
    }

    return result;
};

// Example usage
console.log(nextGreaterElement([4, 5, 2, 10])); // [5, 10, 10, -1]
