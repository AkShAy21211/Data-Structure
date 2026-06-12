const arr = [1, 0, 33, 4, 5];

function maxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
function max(arr) {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
}

function min(arr) {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
}
console.log(min(arr)); // { max: 5, min: 1 }
