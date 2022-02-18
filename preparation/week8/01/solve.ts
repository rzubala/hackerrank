'use strict';

import { ListNode } from '../../common/types.js'

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

type ListNodeNumber = ListNode<number>

const printList = (node: ListNode<number> | undefined): number[] => {
    if (node === undefined) {
        return []
    }
    let values = []
    if (node.next) {
        values.unshift(...printList(node.next))
    }
    values.unshift(node.value)
    return values
}

const merge = (node1: ListNodeNumber | undefined, node2: ListNodeNumber | undefined) => {
    let head: ListNodeNumber | undefined = undefined;
    let last = undefined
    while (node1 || node2) {
        let cur: ListNodeNumber | undefined = undefined;
        if (node1 && !node2) {
            cur = new ListNode(node1.value)
            node1 = node1.next
        } else if (node2 && !node1) {
            cur = new ListNode(node2.value)
            node2 = node2.next    
        } else if (node1 && node2){
            if (node1.value > node2.value) {
                cur = new ListNode(node2.value)
                node2 = node2.next    
            } else {
                cur = new ListNode(node1.value)
                node1 = node1.next    
            }
        }
        if (!head && cur) {
            head = cur
        }
        if (last) {
            last.next = cur
        }
        last = cur
    }
    return head
}

function main() {
    let data: number[] = []
    while (true) {
        const input = readLine()
        if (!input) {
            break
        }
        data.push(+input)
    }
    const tests = data[0]
    data = data.slice(1)
    for (let t=0;t<tests;t++) {
        let list1Size = data[0]        
        let list2Size = data[list1Size + 1]
        let head1 = undefined
        let head2 = undefined
        let last = undefined
        for (let i=1;i<list1Size+1;i++) {
            const tmp = new ListNode(data[i])
            if (!head1) {
                head1 = tmp
            }
            if (last) {
                last.next = tmp
            }
            last = tmp
        }
        last = undefined
        for (let i=list1Size + 2;i<list1Size + list2Size + 2;i++) {
            const tmp = new ListNode(data[i])
            if (!head2) {
                head2 = tmp
            }
            if (last) {
                last.next = tmp
            }
            last = tmp
        }
        console.log(printList(merge(head1, head2)).join(" "))               

        data = data.slice(list1Size + list2Size + 2)
    }
}
