// implimentastion of merge sort


const mergeSort = (arr)=>{


    if(arr.length<=1){
        return arr;
    }
    let mid = parseInt(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));

    return merge(left,right);
}

const merge = (left,right)=>{

    let sortArray = new Array(left.length + right.length);

    let i=0,j=0,k=0;

    while(i<left.length && j<right.length){

        if(left[i]<right[j]){

            sortArray[k] = left[i];
            i++;
        }else{

            sortArray[k] = right[j];
            j++;
        }

        k++;

        
    }

    while(i<left.length){

        sortArray[k] = left[i];
        i++;
        k++;
    }
    while(j<right.length){

        sortArray[k] = right[j];
        j++;
        k++;
    }


    return sortArray;

}

let arr = [3,2,1,4,5,-6,-4,-10,0,-2,11,15];



console.log(mergeSort(arr));
// complexity of merge sort  is O( n log n);
