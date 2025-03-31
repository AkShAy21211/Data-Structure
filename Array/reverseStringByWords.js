function reverseWordsOptimized(str) {
    let result = "", word = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            word = str[i] + word;
        } else if (word.length > 0) {
            result += (result.length > 0 ? " " : "") + word;
            word = "";
        }
    }

    if (word.length > 0) {
        result += (result.length > 0 ? " " : "") + word;
    }

    return result;
}
