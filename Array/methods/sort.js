// const arr = [2,4,6,33,77,10,6,23];

// const res = arr.sort((a,b)=>{

//     return a-b;
// });


// console.log(res);


const phones = [
    {
        brand:"Apple",
        price:100000,
    },
    {
        brand:"samsung",
        price:50000,
    },
    {
        brand:"Redmi",
        price:25000,
    },
    {
        brand:"Oppo",
        price:15000
    }
]
// 1. <0 ...a comes first
// 2. 0 ... nothing will be change
// 3. >0 ... b comes first

const res = phones.sort((a,b)=>{

    return a.price + b.price;
});


console.log(res);