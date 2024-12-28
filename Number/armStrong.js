// FUNCTION TO FIND WHEATEHER A NUMBER IS ARMSTRONG OR NOT
// AN ARMSTRONG NUMBER IS A NUMBER WHERE SUM OF EACH OF ITS DIGITS CUBE IS EQUAL TO THE NUMBER ITSELF

function findNumerIsArmStrong(n) {
  // variable to hold the sum of cubes
  const number = n.toString();
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += Math.pow(number[i], 3);
  }

  return sum === n;
}
console.log(findNumerIsArmStrong(371));

function isArmstrongNumber(n) {
  // Calculate the number of digits
  const numDigits = Math.floor(Math.log10(n)) + 1;

  let sum = 0;
  let temp = n;

  // Extract digits and calculate the sum of their powers
  while (temp > 0) {
    const digit = temp % 10; // Extract the last digit
    sum += Math.pow(digit, numDigits); // Raise to the power of numDigits
    temp = Math.floor(temp / 10); // Remove the last digit
  }

  // Check if the sum matches the original number
  return sum === n;
}

