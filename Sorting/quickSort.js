// quck sort 
// complexity is worst casse O(n), best case is O(n log n)

const quick = (arr)=>{

    if(arr.length<=1){
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];

    for(let i=1; i<arr.length; i++){

        if(arr[i]<pivot){

            left.push(arr[i]);
        }else{

            right.push(arr[i]);
        }
    }

    return [...quick(left),pivot,...quick(right)];
}



let arr = [3,2,1,4,5,-6,-4,-10,0,-2,11,15];



console.log(quick(arr));