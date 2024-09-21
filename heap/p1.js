function findMax(minHeap){


    let max = Number.MIN_SAFE_INTEGER;

    for(let i=Math.floor(minHeap.length / 2); i<minHeap.length; i++){

        if(minHeap[i] > max){

            max = minHeap[i]
        }
    }

    return max;


}

function findMin(maxHeap){

    let min = Number.MAX_SAFE_INTEGER;

    for(let i = Math.floor(maxHeap.length /  2); i<maxHeap.length; i++){

        if(maxHeap[i]< min){
            min = maxHeap[i];
        }


    }

    return min;
}


const arr = [2,4,8,12,33,55];

console.log(findMax(arr));



console.log(findMin(arr.reverse()));