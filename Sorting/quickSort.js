// quck sort 
// complexity is worst casse O(n), best case is O(n log n)

// Quick Sort selects a "pivot" element, partitions the array around the pivot (smaller elements on one side, 
// larger on the other), and recursively sorts the subarrays.


const quickSort = (arr)=>{

  if(arr.length<=1) return arr;

  let left =[];
  let right = [];
  let pivot = arr[0];


  for(let i=1; i<arr.length; i++){

    if(arr[i]<pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left),pivot,...quickSort(right)]
}



let arr = [3,2,1,4,5,-6,-4,-10,0,-2,11,15];



console.log(quickSort(arr));