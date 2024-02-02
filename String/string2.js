let reverseString = (str) => {
    let s = 0;
    let e = str.length - 1;
    // Convert the string to an array
    let strArray = str.split('');

    while (s < e) {
        // Swap characters
        let temp = strArray[s];
        strArray[s] = strArray[e];
        strArray[e] = temp;

        s++;
        e--;
    }
    // Join the array back into a string
    return strArray.join('');
}

console.log(reverseString("hello world"));
