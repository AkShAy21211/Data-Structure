function objectToString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
}

let obj = {
    name: "joe",
    email: "joe@gmail.com"
};

console.log(objectToString(obj)); // Output: "name=joe&email=joe@gmail.com"
