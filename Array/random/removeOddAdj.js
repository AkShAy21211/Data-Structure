function removeAdjacentOdds(arr) {

    let writeIndex = 0; // Position to write the next valid element

    for (let i = 0; i < arr.length; i++) {
        // Check if the current element and the next are odd
        if (i < arr.length - 1 && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            // Skip the next odd element
            i++; // Increment `i` to skip the next element
        } else {
            // Write the current element to the writeIndex position
            arr[writeIndex] = arr[i];
            writeIndex++;
        }

        console.log(arr);
        
    }

    // Resize the array to remove trailing values
    arr.length = writeIndex;

    return arr;
}


let arr = [1, 3, 2, 5, 7, 8, 9];

console.log(removeAdjacentOdds(arr));
