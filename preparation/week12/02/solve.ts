'use strict';

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

class TreeNode<T> {
    data: T;
    left: TreeNode<T> | undefined = undefined;
    right: TreeNode<T> | undefined = undefined;
    constructor (value: T) {
        this.data = value
    }  
}

const addToTree = (head: TreeNode<number>, value: number) => {
    let node: TreeNode<number> | undefined = head;
    let root: TreeNode<number> = head
    while (node) {
        const nvalue = node.data
        root = node
        if (value > nvalue) {
            node = root.right
        } else {
            node = root.left
        }
    }
    const nextNode = new TreeNode<number>(value)
    if (value > root.data) {
        root.right = nextNode
    } else {
        root.left = nextNode
    }
}

const lca = (node: TreeNode<number> | undefined, v1: number, v2: number): number | undefined => {    
    const a1 = ancestors(node, v1)
    //console.log('ancestors', a1)
    for (let n of a1.reverse()) {
        if (contains(n, v2)) {
            return n.data
        }
    }
    return undefined
}

const contains = (head: TreeNode<number>, v2: number): boolean => {
    let node: TreeNode<number> | undefined = head
    while(node) {
        if (node.data === v2) {
            return true
        }
        if (v2 > node.data) {
            node = node.right
        } else {
            node = node.left
        }
    }
    return false
}

const ancestors = (head: TreeNode<number> | undefined, v1:number): TreeNode<number>[] => {    
    let node: TreeNode<number> | undefined = head
    const ancestors: TreeNode<number>[] = []
    while(node) {
        ancestors.push(node)
        if (v1 === node.data) {
            break
        }        
        if (v1 > node.data) {
            node = node.right
        } else {
            node = node.left
        }
    }
    return ancestors
}

function main() {
    readLine()
    const input = readLine()
    const values = input.split(" ").map(i => +i)
    const head = new TreeNode<number>(values[0])
    values.slice(1).forEach(n => addToTree(head, n))
    const [v1, v2] = readLine().split(" ").map(n => +n)
    console.log(lca(head, v1, v2))
}
