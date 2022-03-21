
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

const printInOrderTree = (node: TreeNode<number>) => {
    if (node.left) {
        printInOrderTree(node.left)
    }
    console.log(node.data)
    if (node.right) {
        printInOrderTree(node.right)
    }
}

const printPostOrderTree = (node: TreeNode<number>) => {
    if (node.left) {
        printPostOrderTree(node.left)
    }    
    if (node.right) {
        printPostOrderTree(node.right)
    }
    console.log(node.data)
}

const printPreOrderTree = (node: TreeNode<number>) => {
    console.log(node.data)
    if (node.left) {
        printPreOrderTree(node.left)
    }    
    if (node.right) {
        printPreOrderTree(node.right)
    }
}


const head = new TreeNode(5)
addToTree(head, 3)
addToTree(head, 7)
addToTree(head, 1)
addToTree(head, 9)
addToTree(head, 8)
addToTree(head, 4)
addToTree(head, 2)
addToTree(head, 6)

printPostOrderTree(head)