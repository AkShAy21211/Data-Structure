const arr = [10, 2, 3, 4, 5, 6, 7, 8];

const res = arr.reduce((accumulator, currentVal, index, arr) => {
    if (accumulator > Math.max(...arr)) {
        return accumulator;
    } else {
        return Math.max(...arr);
    }
});

console.log(res);
