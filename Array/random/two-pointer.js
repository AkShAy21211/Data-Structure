function reverseArray(arr){

    let left =0,right=arr.length-1;

    while(left<right){

        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--;
    }
    return arr;
}

// Test the function

console.log(reverseArray([1,2,3,4,5])); // Output: [5,4,3,2,1]

console.log(reverseArray([1,2,3,2,1])); // Output: [1,2,3,2,1]

console.log(reverseArray([])); // Output: []