function mergeSort(arr){
    
    if(arr.length<=1){
        return arr;
    }
    let mid  = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));
    
    return merge(left,right);
}

function merge(left,right){
    
    let i=0,j=0;
    let sortArray = [];
    
    while(i<left.length && j<right.length){
        
        if(left[i]<right[j]){
            sortArray.push(left[i]);
            i++;
        }else{
           sortArray.push(right[j]);
           j++;

        }
    }
    
    while(i<left.length){
        
     sortArray.push(left[i]);
     i++;

    }
     while(j<right.length){
        
     sortArray.push(right[j]);
     j++;

    }
    
    return sortArray;
}

function removeZero(a1,a2){
    
    let arr1 = a1.filter(ele=> ele!==0);
    let arr2 = a2.filter(ele=> ele!==0);
    
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
    
    return   arr1.concat(arr2);
    

    
}


const arr1 = [1,0,3,0,7,5,0];
const arr2 = [0,10,2,8,0,11];
console.log(removeZero(arr1,arr2))