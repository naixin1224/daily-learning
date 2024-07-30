class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* 判断栈是否为空 */
    isEmpty() {
        return this.size === 0;
    }

     /* 入栈 */
    push(element) {
        let node = new ListNode(element);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    
    /* 出栈 */
    pop() {
        const node = this.peek();
        this.head = this.head.next;
        this.size--;
        return node;
    }

    /* 访问栈顶元素 */
    peek() {
        if (this.size === 0) throw new Error('栈为空');
        return this.head.val;
    }
    
     /* 将链表转化为 Array 并返回 */
    toArray() {
        let current = this.head;
        const res = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            res[i] = current.val;
            current = current.next
        }
        return res;
    }
}

const stack = new LinkedListStack();
// 测试栈是否为空
console.log('Is the stack empty?', stack.isEmpty()); // 应该输出 true
// 入栈操作
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toArray());
// 测试栈的长度
console.log('Stack size after pushing 1, 2, 3:', stack.size); // 应该输出 3
// 查看栈顶元素
console.log('Peek the top element:', stack.peek()); // 应该输出 3
// 出栈操作
console.log('Pop the top element:', stack.pop()); // 应该输出 3
// 再次查看栈的长度
console.log('Stack size after popping:', stack.size); // 应该输出 2
// 将栈转换为数组
console.log('Stack to array:', stack.toArray()); // 应该输出 [2, 1]