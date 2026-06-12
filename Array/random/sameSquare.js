function sameSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }


    const squaredArr1 = arr1.map(num => num * num);

    for (let num of arr2) {
        const index = squaredArr1.indexOf(num);
        if (index === -1) {
            return false;
        }
        squaredArr1.splice(index, 1);
       
        
    }

    return true;


}


console.log(sameSquare([1, 2, 3], [1, 4, 9])); // true
console.log(sameSquare([1, 2, 3], [1, 4])); // false
console.log(sameSquare([1, 2, 3], [1, 4, 4])); // false



// optimzed approach

function sameSquareOptimized(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const freq = {};
    for (let num of arr1) {
        freq[num] = (freq[num] || 0) + 1;   
    }

    for (let num of arr2) {
        const root = Math.sqrt(num);
        if (!freq[root]) {
            return false;
        }
        freq[root]--;
    }
    return true;
}