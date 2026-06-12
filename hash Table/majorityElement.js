function majority(arr){


    let hash = {};
    let n=arr.length;

    for(let i=0; i<n; i++){

        let current = arr[i];
       hash[current] = (hash[current]||0)+1;


       if(hash[current]>n/2) return current;
    }

   

    return "NO majority elements";
}

console.log(majority([1,2,2,2,3]));