class SimpleHashTable {
    constructor(size = 4) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
        this.count = 0;
    }

    hash(key) {
        return key.toString().length % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index].push([key, value]);
        this.count++;

        if (this.count / this.size > 0.75) {
            this.resize(this.size * 2);
        }
    }

    resize(newSize) {
        const oldTable = this.table;
        this.size = newSize;
        this.table = new Array(newSize).fill(null).map(() => []);
        this.count = 0;

        for (let bucket of oldTable) {
            for (let [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }
}
