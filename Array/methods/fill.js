// const arr = [12, 3, 4, 5, 6, 7, 8];

// const res = arr.fill(0);


// console.log(res);


function createArray(n){

    return Array(n)
    .fill(0)
    .map((_,index)=>index+1);
}


console.log(createArray(10));