const map = new Map([['a', 1],['b',3]]);

map.set('d',6)

console.log(map.has('a'));
console.log(map.delete('a'));
console.log(map.size);
console.log(map.clear());
for (const [key, value] of map) {
    console.log(key,value);
}
