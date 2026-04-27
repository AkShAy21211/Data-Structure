function reverseArr(arr){
    let start = 0;
    let end = arr.length - 1;


    while(start<end){

        let temp  = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArr([1,2,3,4,5])); // [5,4,3,2,1]

function reverseWordsOptimized(str){
    let arr = str.split(" ");
    let start = 0;
    let end = arr.length - 1;

    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr.join(" ");
}