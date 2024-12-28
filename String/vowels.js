function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let s of str.toLowerCase()) {
    if (vowels.includes(s)) count++;
  }

  return count;
}

console.log(findVowels("HEllo World How ARE U")); // Output: 3
