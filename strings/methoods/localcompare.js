const str = 'hello world';



// Syntax :
//               localeCompare(compareString)
//               localeCompare(compareString, locales)
//               localeCompare(compareString, locales, options)

//                🔹compareString :  The string against which the referenceStr is compared.
//                🔹locales (Optional) : A string with a BCP 47 language tag, or an array of such strings.
//                🔹options (Optional) : An object adjusting the output format.

console.log(str.localeCompare('h','he',{sensitivity:'base'}));