class DoublyLinkedListNode {
    data: number;
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};


class DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail!.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function sortedInsert(llist: DoublyLinkedListNode, data: number): DoublyLinkedListNode {
    const node = new DoublyLinkedListNode(data)
    let itNode = llist
    if (!itNode) {
        return node
    }
    while (true) {
        const currentData = itNode.data
        if (node.data <= currentData) {
            const prevNode = itNode.prev
            node.next = itNode
            if (prevNode !== null) {
                prevNode.next = node
                node.prev = prevNode
                break
            } else {
                itNode.prev = node
                return node
            }         
        }
        const nextNode = itNode.next
        if (nextNode === null) {
            itNode.next = node
            node.prev = itNode
            break
        }
        itNode = nextNode
    }    
    return llist;
}