// function heapSort(arr){

//     for(let i=Math.floor(arr.length / 2)-1; i>=0; i--){

//         let smallest = i;
//         let left = 2 * i + 1;
//         let right = 2 * i + 2;

//         if(left < arr.length && arr[left] < arr[smallest]){

//             smallest = left;
//         }

//         if(right < arr.length && arr[right] < arr[smallest]){
//             smallest = right;
//         }

//         if(smallest !==i){

//             [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
//             heapSort(arr);
//         }
//     }

//     return arr;
// }

// const arr = [2,4,6,3,2,1,9];

// console.log(heapSort(arr));

function heapSort(arr){


    for(let i=Math.floor(arr.length/2)-1; i>=0; i--){


        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;


        if(left < arr.length && arr[left]<arr[smallest]){

            smallest = left;
        }

        
        if(right < arr.length && arr[right]<arr[smallest]){

            smallest = right;
        }

        if(smallest!==i){
            [arr[i],arr[smallest]] = [arr[smallest],arr[i]];
            heapSort(arr)
        }
    }
    return arr;
}


const arr = [2,4,6,3,2,1,9];

console.log(heapSort(arr));
