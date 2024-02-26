class HashTable {

    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key[i].charCodeAt();
      }
      return hash % this.size;
    }
  
    set(key, val) {
      const index = this.hash(key);
  
      if (this.table[index] === undefined) {
        this.table[index] = [];
      }
      this.table[index].push([key, val]);
  
      return index;
    }
  
    get(key) {
      const index = this.hash(key);
  
      if (this.table[index] && this.table[index].length > 0) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
  
      return undefined;
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  const table = new HashTable(10);
  
  table.set("name1", "sanu");
  table.set("name2", "kiran");
  table.set("place", "kannur");
  table.set("food", "biriyani");


  console.log(table.get("name1"));
  table.display();
  