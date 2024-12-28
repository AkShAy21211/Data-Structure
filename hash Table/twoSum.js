/**
 * function to perform twosum using hash table
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number[]}
 */

const twosum = (arr,target)=>{

    let hash ={};
    
    for(let i=0; i<arr.length; i++){
        
        let compliment = arr[i];
        
      
        if(hash[compliment]!==undefined){

            return [arr[hash[compliment]],arr[i]];
        }

        hash[target - compliment] = i;  // storing the index of current element in hash table
    }

    return [];
}

/**
 * Function to find two numbers in an array that add up to a target
 * using a hash table
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    const numIndices = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numIndices.has(complement)) {
            return [nums[numIndices.get(complement)], nums[i]];
        }
        numIndices.set(currentNum, i);
    }
    return []; 
};

// Test the function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(twoSum(arr, 15)); // Output: [6, 9]
