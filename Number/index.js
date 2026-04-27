function swap1(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
}


function numberSwap1(a,b){
    let temp = a;
    a = b;
    b = temp;
}
function numberSwap2(a,b){
    a = a+b;
    b = a-b;
    a = a-b;
}
function swap2(arr, i, j) {
    [arr[i],arr[j]] = [arr[j],arr[i]];

}