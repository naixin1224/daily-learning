class CustomArray {
    constructor() {
        this.items = [];
    }

    // 添加元素到数组末尾
    push(element) {
        this.items.push(element);
    }

    // 移除数组最后一个元素并返回它
    pop() {
        return this.items.pop();
    }

    // 获取数组长度
    size() {
        return this.items.length;
    }

    // 检查数组是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 获取数组元素
    get(index) {
        if (index < 0 || index >= this.items.length) {
            return "Index out of bounds";
        }
        return this.items[index];
    }

    // 重置数组元素
    set(index, element) {
        if (index < 0 || index >= this.items.length) {
            return "Index out of bounds";
        }
        this.items[index] = element;
    }

    // 打印数组中的所有元素
    print() {
        console.log(this.items);
    }
}

// 使用示例
const myArray = new CustomArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.print(); // 输出 [1, 2, 3]
console.log(myArray.pop()); // 输出 3
console.log(myArray.get(1)); // 输出 2
myArray.set(1, 4);
myArray.print(); // 输出 [1, 4, 2]
console.log(myArray.size()); // 输出 3
console.log(myArray.isEmpty()); // 输出 false