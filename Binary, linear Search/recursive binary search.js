let arr = [1,2,3,4,5,6,7,8,9];
let start =0;
let end = arr.length-1
let target = 5;


function binarySearch(arr,start,end,target){
    
    
    if (start > end) return false; // Base case: target not found
    
    let mid = Math.floor((start+end)/2);
    
    if(arr[mid]===target) return true
   
    if(arr[mid]>target) return binarySearch(arr,start,mid-1,target)
    else  return binarySearch(arr,mid+1,end,target)
    

}


console.log(binarySearch(arr,start,end,target))