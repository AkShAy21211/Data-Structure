const readlineSync = require('readline-sync');
// Function to get user input for a 1D array
function get1DArray() {
    const length = readlineSync.question('Enter the length of the 1D array: ');
    const array1D = [];

    for (let i = 0; i < length; i++) {
        const element = readlineSync.question(`Enter element at index ${i}: `);
        array1D.push(parseInt(element));
    }

    return array1D;
}

// Function to get user input for a 2D array
function get2DArray() {
    const rows = readlineSync.question('Enter the number of rows for the 2D array: ');
    const columns = readlineSync.question('Enter the number of columns for the 2D array: ');
    const array2D = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            const element = readlineSync.question(`Enter element at row ${i}, column ${j}: `);
            row.push(parseInt(element));
        }

        array2D.push(row);
    }
    

    return array2D;
}



// Function to display a 2D array in matrix shape
function displayMatrix(array2D) {
    for (let i = 0; i < array2D.length; i++) {
        console.log(array2D[i]);
    }
}

// Example usage
// const my1DArray = get1DArray();
// console.log('1D Array:', my1DArray);

const my2DArray = get2DArray();
console.log('2D Array:');
displayMatrix(my2DArray);