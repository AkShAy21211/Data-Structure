

// using dio while loop 
const bubble = (arr)=>{

    let swap;
    do{
        swap = false;
        for(let i=0; i<arr.length;  i++){
            if(arr[i]>arr[i+1]){

                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
    }while(swap);

    return arr;

}

// using nested for loop.
// const bublesort = (arr) => {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let swapped = false;
//         for (let j = 1; j < n - i; j++) {
//             if (arr[j] < arr[j - 1]) {
//                 // swap

//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//                 swapped = true;
//             }
//         }
//         if (!swapped) {
//             break;
//         }
//     }
//     return arr;
// }

let arr1 = [-5, 12, -8, 3, 0,-3, 11, -14, 13, -12];

console.log(bubble(arr1));