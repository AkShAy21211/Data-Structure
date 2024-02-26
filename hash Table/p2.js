// Problem 2: Finding the First Non-Repeating Character in a String
// Problem:
// Write a function that takes a string and returns the first non-repeating character. If there is no non-repeating character, return null.

function firstNonRepeatingChar(str) {
   
    let count = {};

    for(let s of str){
        let current = s;
        count[current] = (count[current] || 0) +1;
     
    }

    for(let s of str){

        if(count[s] === 1) return s;
    }

    return null;
  }
  
  // Example usage:
  const result = firstNonRepeatingChar("PProgramming");
  console.log(result);  // Output: p
  