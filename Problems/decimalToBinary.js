function decimalToBinary(num) {
  let binary = '';
  let power = 1;

  // Find the largest power of 2 less than or equal to the number
  while (power <= num) {
    power *= 2;
  }
  power /= 2; // Step back to the largest fitting power

  while (power >= 1) {
    if (num >= power) {
      binary += '1';
      num -= power;
    } else {
      binary += '0';
    }
    power /= 2;
  }

  return binary;
}

// Example usage:
console.log(decimalToBinary(13)); // Output: "1101"
