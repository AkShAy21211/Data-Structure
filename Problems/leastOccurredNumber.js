const count = {};
arr.forEach(n => count[n] = (count[n] || 0) + 1);

let min = Infinity, result;
for (let key in count) {
  if (count[key] < min) {
    min = count[key];
    result = key;
  }
}
