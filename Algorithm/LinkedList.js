class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //在尾部添加节点
    append(data) {
        let newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    //在头部添加节点
    prepend(data) {
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    //删除指定值的节点
    remove(data) {
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    //根据值查找节点
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    //根据索引获取节点
    nodeAt(index) {
        let current = this.head;
        if (index < 0 || index >= this.size) {
            return null;
        }
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    //打印链表
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(100);
list.remove(1);
list.append(300);
list.append(400);
list.printList();
console.log(list.nodeAt(1));