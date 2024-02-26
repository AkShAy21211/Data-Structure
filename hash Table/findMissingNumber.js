function findMissingNumbers(arr) {
    const hashtable = {};
    const missingNumbers = [];
  
    // Populate hashtable with numbers from the array
    for (const num of arr) {
      hashtable[num] = true;
    }
  
    console.log(hashtable);
    // Check for missing numbers
    for (let i = 1; i <= arr.length + 1; i++) {
      if (hashtable[i] === undefined) {
        missingNumbers.push(i);
      }
    }
  
    return missingNumbers;
  }
  
  // Example usage:
  const inputArray = [1,2,3,4,5];
  const missingNumbers = findMissingNumbers(inputArray);
  
  console.log("Missing numbers:", missingNumbers);
  