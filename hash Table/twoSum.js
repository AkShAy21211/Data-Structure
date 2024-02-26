/**
 * function to perform twosum using hash table
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number[]}
 */

const twosum = (arr,target)=>{

    let hash ={};
    
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        if(hash[target - current]!==undefined){

            return [arr[hash[target - current]],arr[i]];
        }

        hash[current] = i; 
    }

    return [];
}

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(twosum(arr,15));
