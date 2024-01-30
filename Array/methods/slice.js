const names = ['akshay', 'kiran', 'aswanth'];

const res = names.map((cval, index, arr) => {
    return cval.charAt(0).toUpperCase() + cval.slice(1);
});

console.log(res);
