
let arr = [5,8,9,2,1,4,3,6,7];

const selectionSort = (arr) => {

   for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
       }
   }

    return arr
}

console.log(selectionSort(arr))