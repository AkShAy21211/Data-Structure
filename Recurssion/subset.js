

function subset(){

    let result = [];
    let temp = [];


    function recursive(num,i){


        if(i === 0){
            return result.push([...temp])
        }

        temp.push(num[i]);
        recursive(num,i+1);
        temp.pop();
        recursive(num,i+1);
    }


    recursive(num,i);
    return result;
}



console.log(subset([1,2,3]));

