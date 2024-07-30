class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/* 基于链表实现的队列 */
class LinkedListQueue {
    constructor() {
        this.head = null;
        this.rear = null;
        this.size = 0;
    }
    /* 判断队列是否为空 */
    isEmpty() {
        return this.size === 0;
    }
    /* 入队 */
    push(node) {
        let num = new ListNode(node);
        if (!this.head) {
            this.head = num;
            this.rear = num;
        } else {
            this.rear.next = num;
            this.rear = num;
        }
        this.size++;
    }
    /* 出队 */
    pop() {
        let num = this.peek();
        this.head = this.head.next;
        this.size--;
        return num;
    }
    /* 访问队首元素 */
    peek() {
        if (this.size === 0) throw new Error('队列为空');
        return this.head.val
    }
    /* 将链表转化为 Array 并返回 */
    toArray() {
        let current = this.head;
        let res = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            res[i] = current.val;
            current = current.next
        }
        return res;
    }
}

const queue = new LinkedListQueue();
// 测试队列是否为空
console.log('Is the queue empty?', queue.isEmpty()); // 应该输出 true
// 入队操作
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.toArray());
// 测试队列的长度
console.log('Stack size after pushing 1, 2, 3:', queue.size); // 应该输出 3
// 查看队首元素
console.log('Peek the top element:', queue.peek()); // 应该输出 1
// 出队操作
console.log('Pop the top element:', queue.pop()); // 应该输出 1
// 再次查看队列的长度
console.log('Stack size after popping:', queue.size); // 应该输出 2
// 将队列转换为数组
console.log('Stack to array:', queue.toArray()); // 应该输出 [2, 3]