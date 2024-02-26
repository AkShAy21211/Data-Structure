class HashTable{

    constructor(size){

        this.table  = new Array(size);
        this.size = size;
    }

    hash(key){

    let value ="";
    for(let i=0; i<key.length; i++){
        value+= key[i].charCodeAt();
    }

    return value % this.size;

    }

    set(key,value){

    const index = this.hash(key);
    this.table[index] = value;

    }

    get(key){

        const index = this.hash(key);

        return this.table[index];
    }

    remove(key){

        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){

        for(let i=0; i<this.size; i++){

            if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
    }
    
}


const  table = new HashTable(30);

table.set("name","akshay");
table.set("age",21);
table.set("citi","kannur");
console.log(table);
table.display()