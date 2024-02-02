// Function to check if a word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    const lowercaseWord = word.toLowerCase();
    
    // Reverse the string
    const reversedWord = lowercaseWord.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original string
    return lowercaseWord === reversedWord;
  }
  


  console.log(isPalindrome('malayalam'));