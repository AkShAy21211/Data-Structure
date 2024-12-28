//COMPARE 2 ARRAY ARE EQUEAL OR NOR EQUAL
function compare(arr1,arr2){

        if(arr1.length!==arr2.length) return false;
        
        for(let i=0; i<arr1.length; i++){
            if(arr1[i]!==arr2[i]) return false;
        }
        
        return true;
}

//CHECK IF THE ARRAY IS A PALINDROME

function isPalindrome(arr){

        let left = 0;
        let right = arr.length - 1;

        while(left<right){
            if(arr[left]!==arr[right]) return false;
            left++;
            right--;
        }

        return true;
}

0
