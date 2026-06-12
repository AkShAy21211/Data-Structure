let reverseString = (str) => {
  let s = 0;
  let e = str.length - 1;
  str =  str.split("")

  while (s < e) {
    let temp = str[s];
    str[s] = str[e];
    str[e] = temp;

    s++;
    e--;
  }

  return str.join("");
};

console.log(reverseString("hello world"));
