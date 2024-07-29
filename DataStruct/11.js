class MyList {
    #arr = new Array();
    #capacity = 10;
    #size = 0;
    #extendRatio = 2;

    constructor() {
        this.#arr = new Array(this.#capacity);
    }

    size() {
        return this.#size;
    }
    capacity() {
        return this.#capacity;
    }
    get(index) {
        if (index < 0 || index >= this.#size) throw new Error("超过边界");
        return this.#arr[index];
    }
    set(index, element) {
        if (index < 0 || index >= this.#size) throw new Error("超过边界");
        return this.#arr[index] = element;
    }
    add(element) {

        this.#arr[this.#size] = element;
        this.#size++;
    }
    insert(index, element) {
        if (index < 0 || index > this.#size) throw new Error("超过边界");
        if (this.#size == this.#capacity) {
            this.extendCapacity()
        }
        for (let i = this.#size - 1; i >= index; i--) {
            this.#arr[i+1] = this.#arr[i];
        }
        this.#arr[index] = element;
        this.#size++;
    }
    remove(index){
        if (index < 0 || index > this.#size) throw new Error("超过边界");
        let element = this.#arr[index];
        for(let i = index;i<this.#size-1;i++){
            this.#arr[i] = this.#arr[i+1];
        }
        this.#size--;
        return element;
    }
    extendCapacity(){
        this.#arr = this.#arr.concat(new Array(this.capacity()*(this.#extendRatio-1)));
        this.#capacity = this.#arr.length;
    }

    toArray() {
        let size = this.size();
        const arr = new Array(size);
        for (let i = 0; i < size; i++) {
            arr[i] = this.get(i);
        }
        return arr;
    }
}

let myList = new MyList();

for (let i = 1; i <= 10; i++) {
    myList.add(i);
}
console.log(myList.get(1));
myList.set(5, 9000000);
console.log(myList.toArray());
myList.insert(9,40000000);
console.log(myList.toArray());
myList.remove(3);
console.log(myList.toArray());