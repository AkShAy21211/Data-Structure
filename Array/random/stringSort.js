function sortString(str1, str2) {
  return str1.length - str2.length;
}

let arr = ["apple", "bat", "ball", "banana", "cat", "apricot"];
arr.sort(sortString);

console.log(arr); //["bat", "cat", "apple", "ball", "banana", "apricot"]
