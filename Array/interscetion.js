function findInterScetion(arr){
    let set1 = new Set(arr[0]);
    let set2 = new Set(arr[1]);

    let intersection = new Set([...set1].filter(x => set2.has(x)));
    return Array.from(intersection);

}

// Test Cases

console.log(findInterScetion([[1, 2, 3, 4, 5], [4, 5, 6, 7, 8]])); // [4, 5]
console.log(findInterScetion([[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]])); // [3, 4, 5]
console.log(findInterScetion([[1, 2, 3, 4, 5], [1, 2, 3, 5, 6]])); // [1, 2, 3, 5]
console.log(findInterScetion([[1, 2, 3, 4, 5], [8]])); // []
function findInterScetion2(arr1,arr2){


    let intersection = arr1.filter(ele=>{

        return arr2.includes(ele);
    })

    return [...new Set(intersection)]


}

console.log(findInterScetion2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [4, 5]
