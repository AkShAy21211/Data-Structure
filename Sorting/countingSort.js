function countingSort(arr, maxValue) {
  const count = new Array(maxValue + 1).fill(0);
  const output = [];

  for (let num of arr) {
    console.log(count[num]++);
    
  }

  console.log(count);
  
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      output.push(i);
      count[i]--;
    }
    console.log(count[i]);
    
  }

  return output;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1], 8)); // [1, 2, 2, 3, 3, 4, 8]
