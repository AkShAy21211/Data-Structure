class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }

  set(key, value) {
    const idx = this._hash(key);
    // this.table[idx] = value;
    let bucket = this.table[idx];
    if (!bucket) {
      bucket = [[key, value]];
      this.table[idx] = bucket;
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
      this.table[idx] = bucket;
    }
  }

  get(key) {
    const idx = this._hash(key);
    const bucket = this.table[idx];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
      return undefined;
    }
    return undefined;
  }

  delete(key) {
    const idx = this._hash(key);
    const bucket = this.table[idx];
    if (bucket) {
      const sameKeyItemIndex = bucket.find((item) => item[0] === key);
      if (sameKeyItemIndex) {
        bucket.splice(sameKeyItemIndex, 1);
        this.table[idx] = bucket;
      }
      return undefined;
    } else {
      return undefined;
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashTable = new HashTable(50);

hashTable.set("name", "Alice");
hashTable.set("age", 30);

hashTable.display();

hashTable.set("mane", "Clark");
console.log(hashTable);

hashTable.display();

hashTable.delete("name");

hashTable.display();
